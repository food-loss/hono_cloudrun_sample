import { Hono } from "hono";

export const port = parseInt(process.env.PORT) || 3000;

export const app = new Hono();

app.get('/hello', (c) => c.text('hello'));

export default {
  port,
  fetch: app.fetch,
};
