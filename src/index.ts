import { Hono } from "hono";
import { webhook } from "./webhook";

const port = parseInt(process.env.PORT) || 3000;

export const app = new Hono();

app.get('/hello', (c) => c.text('hello'));

export const route = app.route('/webhook', webhook);


export default {
  port,
  fetch: app.fetch,
};
