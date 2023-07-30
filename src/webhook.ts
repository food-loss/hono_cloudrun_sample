rdimport { Hono } from "hono";

export const webhook = new Hono();
const teamsEndpoint = 'https://jbgrp.webhook.office.com/webhookb2/fb25b8f7-22dc-4706-a1c8-5bad1de6cf32@c1bf27d1-4621-477c-99bf-26732beafa4d/IncomingWebhook/4aca8a63108f4901979f1bdd8c160554/7e0e44e7-42ce-4e67-b57c-c3f1d0294209';

webhook.post('notify',async(c) => {
    const url = teamsEndpoint
    const headers = {
        'Content-Type': 'application/json'
    }
    const message = `クーポンが発行されました。\n 下記のサイトでクーポンを取得してください。 \n https://wide-exchanger-394315.web.app/foo?date=${c.req.date}&record_no=${c.req.record_no}`;
    const options = {
        method: 'POST',
        headers : headers,
        body: JSON.stringify({ text: message })
    }
    const res = await fetch(url, options)
    return res;
})
