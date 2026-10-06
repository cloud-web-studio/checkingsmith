import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/client';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: "https://premium-gator-129402.upstash.io",
  token: "gQAAAAAAAfl6AAIgcDI4NGFmNWJiNjBkOWQ0OWY5YWU4ZTMyZmIyYzI0ZjU4OA",
});

export async function GET(request, { params }) {
  const { slug } = await params;
  const { search } = new URL(request.url);
  const supabase = createClient()
  const apikey = request.headers.get('apikey')
  if(!apikey) return NextResponse.json({ error: 'Missing API Key' }, { status: 401 })

  const redis_key = `sub:${apikey}`;
  let redis_value = await redis.get(redis_key)

  if(!redis_value){
    const {data} = await supabase.from('subscriptions').select('user_id, plan_id, sport_id, customkey, plans ( limit )').eq('customkey',apikey);
    if(!data.length) return NextResponse.json({ error: 'Invalid API Key' }, { status: 401 })
    const {count} = await supabase.from('request').select('*', { count: 'exact', head: true }).eq('user_id',data[0].user_id).eq('plan_id',data[0].plan_id)
    redis_value = {...data[0], count:count}
    redis.set(redis_key, JSON.stringify(redis_value), { ex: 60 }).then()
  }

  if(redis_value.count >= redis_value.plans.limit){
    return NextResponse.json({ error: 'API Limit Reached', count:redis_value.count , limit:redis_value.plans.limit }, { status: 429 });
  }

  const exactPath = `${slug}${search}`;
  const url = 'http://45.151.122.115/api/v1/nfl/' + exactPath
  const options = {
    method: 'GET'
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    let inc_count = redis_value.count + 1
    redis_value = {...redis_value, count:inc_count}
    redis.set(redis_key, JSON.stringify(redis_value), { ex: 60 }).then()
    supabase.from('request').insert({ user_id: redis_value.user_id, plan_id:redis_value.plan_id, sport_id:redis_value.sport_id, endpoint:exactPath }).then();
    return NextResponse.json({ message: result, count:redis_value.count , limit:redis_value.plans.limit });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: error });
  }




  // await redis.flushdb();
  // const allKeys = await redis.keys('*');
  // return NextResponse.json({ error: redis_value })
}