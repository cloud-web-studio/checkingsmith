import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/client';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: "https://premium-gator-129402.upstash.io",
  token: "gQAAAAAAAfl6AAIgcDI4NGFmNWJiNjBkOWQ0OWY5YWU4ZTMyZmIyYzI0ZjU4OA",
});

export async function GET(request, { params }) {
    const logData = { 
        user_id: 'redis_value.user_id', 
        plan_id: 'redis_value.plan_id', 
        sport_id: 'redis_value.sport_id', 
        endpoint: 'exactPath',
        created_at: new Date().toISOString() // Ensure time is accurate
    };
    // redis.rpush('api_log_queue', JSON.stringify(logData)).then();
    // const logs = await redis.lrange('api_log_queue', 0, -1);
    // await redis.ltrim('api_log_queue', logs.length, -1);
    // const batchRecords = logs.map(log => JSON.pars(elog));
    // console.log(batchRecords)
    // await redis.ltrim('api_log_queue', logs.length, -1);
    return NextResponse.json({ message: 'logs' });
}