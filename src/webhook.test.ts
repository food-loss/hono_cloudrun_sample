import { describe, expect, it } from 'bun:test'
import { app, port } from '.'

describe('API Test', () => {

    it('POST notify message should be response code is 200', async () => {
        
        const body = {
            title: 'test title',
            text: 'test message'
        };
        const res = await app.post('/webhook/notify/message', body);
        expect(res.status).toBe(200)
        expect(await res.text()).toBe("hello")
    })

})