import { Hono } from "hono";
import { webhook } from "./webhook";
import { coupon } from "./coupon";
const port = parseInt(process.env.PORT) || 3000;

export const app = new Hono();

app.get('/hello', (c) => c.text('hello'));

export const route = app.route('/webhook', webhook);
app.route('/coupon', coupon);

export default {
  port,
  fetch: app.fetch,
};
