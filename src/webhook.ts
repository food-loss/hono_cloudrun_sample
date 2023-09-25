import { Hono } from "hono";

export const webhook = new Hono();
const teamsEndpoint = 'https://jbgrp.webhook.office.com/webhookb2/fb25b8f7-22dc-4706-a1c8-5bad1de6cf32@c1bf27d1-4621-477c-99bf-26732beafa4d/IncomingWebhook/245254f7884b499a808406cea9fa2f05/2e51cae6-8969-485b-955c-4d64f0440c41';

webhook.post('notify',async(c) => {
    const url = teamsEndpoint
    const headers = {
        'Content-Type': 'application/json'
    }
    const c_req = await c.req.json();
    const message = `クーポンが発行されました。商品名： ${c_req.product_name} 割引額： ${c_req.coupon} 円 <br />次のサイトでクーポンを取得してください。  https://wide-exchanger-394315.web.app/publish?date=${c_req.date}&record-no=${c_req.product_id}&product_name=${c_req.product_name}&coupon=${c_req.coupon}`;
    const options = {
        method: 'POST',
        headers : headers,
        body: JSON.stringify({ text: message })
    }
    const res = await fetch(url, options)
    return res;
})

webhook.post('notify/message', async(c) => {
    const url = teamsEndpoint
    const headers = {
        'Content-Type': 'application/json'
    }
    const c_req = await c.req.json();

    const title = c_req.title;
    const message = c_req.message;

    const options = {
        method: 'POST',
        headers : headers,
        body: JSON.stringify({
            "text": `**${title}**<br />${message}`
        })
    }
    const res = await fetch(url, options)
    return res;
})