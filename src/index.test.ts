import { describe, expect, it } from 'bun:test'
import { app, port } from '.'

describe('API Test', () => {

    it('GET hello should be response code is 200', async () => {

        const req = new Request(`http://localhost:${port}/hello`);
        const res = await app.request(req);
        expect(res.status).toBe(200)
        expect(await res.text()).toBe("hello")
    })

})