'use server'

// import { createClient } from '@/utils/supabase/client';
import { createClient } from '@/utils/supabase/server';
import { Redis } from '@upstash/redis';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const redis = new Redis({
  url: "https://premium-gator-129402.upstash.io",
  token: "gQAAAAAAAfl6AAIgcDI4NGFmNWJiNjBkOWQ0OWY5YWU4ZTMyZmIyYzI0ZjU4OA",
});

export async function LoginOrRegister(authstate, email, password) {
    const supabase = await createClient()
    if(authstate == 'Sign In'){
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return {error: error ? true : false , msg: error?.message};
    }else{
      const { error } = await supabase.auth.signUp({ email, password });
      // const { data, error } = await supabase.auth.signInWithOtp({ email, 
      //   options: {
      //     shouldCreateUser: true, 
      //   },
      //  });
      //  console.log(data)
      //  console.log(error)
      return {error: error ? true : false  , msg: error?.message};
    }
}

export async function SingleSportData(user_id, sport_id) {
    const supabase = await createClient()
    let { data: plansList, error } =  await supabase.from('plans').select('*, sub:subscriptions(status, api:api_keys(key_hash, trans_id, trans:transactions(count)))')
    .eq('sport_id',sport_id)
    .eq('subscriptions.user_id', user_id)
    .order('created_at', { ascending: true });
    const subs = plansList.filter((val) => {return val.sub.length})[0]
    let count = 0;
    if(subs){
      count = await redis.hget(`pending_counts:${subs?.sub[0].api[0].key_hash}`, subs?.sub[0].api[0].trans_id) + subs?.sub[0].api[0].trans.count;
    }
    return { 
        sub:{
            status: subs ? true:false,
            name:subs ? subs?.name : 'Not Active',
            apikey:subs ? subs?.sub[0].api[0].key_hash : 'sports_api_hub...............', 
            count,
            mlimit:subs ? subs?.request_limit : 0,
            reqper:subs ? Math.round((count / subs?.request_limit) * 100) : 0
        }, 
        plansList 
    }
}

export async function CreateCheckoutLink(site_url, plan_id, price_id, sport_id) {
    try {
      const supabase = await createClient()
      const { data: { user:{id:user_id} }, error: authError } = await supabase.auth.getUser();
      const { data: existingSub } = await supabase.from('subscriptions').select('st_cus_id, st_sub_id, plans (sport_id)').eq('user_id', user_id).eq('plans.sport_id', sport_id).maybeSingle();
      if(existingSub?.plans){
        const subscription = await stripe.subscriptions.retrieve(existingSub.st_sub_id);
        const portalSession = await stripe.billingPortal.sessions.create({
                  customer: existingSub.st_cus_id,
                  return_url: site_url.url,
                  flow_data: {
                      type: 'subscription_update_confirm',
                      subscription_update_confirm: {
                          subscription: existingSub.st_sub_id,
                          items: [{
                              id: subscription.items.data[0].id,
                              price: price_id,
                              quantity: 1
                          }]
                      }
                  }
              })
        return { error:false, url:portalSession.url };
      }else {
        const session = await stripe.checkout.sessions.create({
              customer: existingSub?.st_cus_id,
              mode: 'subscription',
              payment_method_collection: 'if_required',
              subscription_data: {
                metadata: { plan_id, price_id, url:site_url.url, sport_id, user_id},
              },
              line_items: [{ price: price_id, quantity: 1 }],
              // success_url: site_url.host+'/dashboard/confirmpayment?sessionid={CHECKOUT_SESSION_ID}',
              success_url: site_url.url,
              cancel_url: site_url.url,
              expand: ['subscription']
            });
        return { error:false, url:session.url };
      }
  } catch (error) {
    return { error:true, msg:error };
  }
}


export async function GetSportsList() { 
  const supabase = await createClient()
  let { data: sports, error } =  await supabase.from('sports').select('*')
  return sports;
}

export async function GetSubscription(){
  const supabase = await createClient()
  const { data: { user:{id:user_id} }, error: authError } = await supabase.auth.getUser();
  const { data, error } = await supabase.from('api_keys')
  .select(` id, created_at, key_hash,
    subscriptions (status, plans(name, request_limit, sports(name))),
    transactions(count)
  `).eq('subscriptions.user_id', user_id)
  const formattedData = data.map((item) => ({
    id: item.id,
    apikey: item.key_hash,
    count:item.transactions.count,
    limit: item.subscriptions.plans.request_limit,
    status: item.subscriptions.status,
    created_at: item.created_at.split('T')[0],
    sports: item.subscriptions.plans.sports.name,
    plans: item.subscriptions.plans.name
  }));
  return formattedData
}

export async function SubmitContact({name, email, msg, from}) { 

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({name, email, msg, from});
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  const response = await fetch("http://localhost:9999/site/contact", requestOptions)
  if (!response.ok) {
      const errorData = await response.json();
      return {status:false, error:errorData.message}
  }
  const data = await response.json();
  return {status:true, data}
}

export async function GetPlans(sport_id) {
    const supabase = await createClient()
    const { data:{session}, error: authError } = await supabase.auth.getSession();
    if(session?.user?.id){
      let { data: plansList, error } =  await supabase.from('plans').select('*, sub:subscriptions(status), sports(url)')
      .eq('sport_id',sport_id)
      .eq('subscriptions.user_id', session?.user?.id).order('created_at', { ascending: true });
      return plansList
    }else{
      let { data: plansList, error } =  await supabase.from('plans').select('*, sports(url)').eq('sport_id',sport_id).order('created_at', { ascending: true });
      return plansList
    }

    
}