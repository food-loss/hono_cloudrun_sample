import { Hono } from "hono";
import { cors } from "hono/cors";
import { webhook } from "./webhook";
import { coupon } from "./coupon";

const port = parseInt(process.env.PORT) || 3000;

export const app = new Hono();

app.use(
  '*',
  cors({
    origin: '*',
    allowHeaders: ['Content-Type'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    maxAge: 600,
    credentials: true,
  })
)

app.get('/hello', (c) => c.text('hello'));

export const route = app.route('/webhook', webhook);
app.route('/coupon', coupon);

console.log('up');

export default {
  port,
  fetch: app.fetch,
};
