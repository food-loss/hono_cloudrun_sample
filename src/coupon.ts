import { Hono } from "hono";

export const coupon = new Hono();

coupon.post('usage',async(c) => {
    const url = 'KINTONE_URL_HERE'
    const headers = {
        'Content-Type': 'application/json'
    }
    const body = await c.req.json();
    const options = {
        method: 'POST',
        headers : headers,
        body: body
    }
    const res = await fetch(url, options)
    return res;
});

coupon.get('test', (c) => c.text('coupon'));