import { Hono } from "hono";

export const webhook = new Hono();
const teamsEndpoint = 'https://jbgrp.webhook.office.com/webhookb2/7568c817-5251-46e8-a7ef-cb54a932c5c4@c1bf27d1-4621-477c-99bf-26732beafa4d/IncomingWebhook/4ea1f72048834f3ea8ce2de521164d81/2e51cae6-8969-485b-955c-4d64f0440c41';

webhook.post('notify',async(c) => {
    const url = teamsEndpoint
    const headers = {
        'Content-Type': 'application/json'
    }
    const options = {
        method: 'POST',
        headers : headers,
        body: await c.req.text()
    }
    const res = await fetch(url, options)
    return res;
})