import { Hono } from "hono";

export const coupon = new Hono();

// クーポン利用登録データへ登録
coupon.post('schedule',async(c) => {
    const url = 'https://jb-foodloss-service.cybozu.com/k/v1/record.json'

    // kintoneのAPIトークン
    const scheduleToken = 'bHUPka7lkq3jsFNe16Six1tAzACceo1cDBi6Xzd3'
    const productToken = 'FC7sAVFR9MznHRVWo85F6PiJy1tXTShppcHuyO3J'
    const employeeToken = 'RZxR6O6UVRkMZ27rc0jiJaCCHhI3bOB4buWsaeKH'

    const headers = {
        'Content-Type': 'application/json',
        "X-Cybozu-API-Token": scheduleToken+","+productToken+","+employeeToken
    }
    const body = await c.req.json();
    console.log(body.emp_lu);

    // （集計用）日付＋商品名の生成
    const today = new Date();
    const totalKey = today.getFullYear() + ("0" + (today.getMonth()+1)).slice(-2) + ("0" + (today.getDate())).slice(-2) + "_" + body.product_id

    const postBody = {
        "app":10,
        "record":{
            "emp_lu":{
                "value":body.emp_lu
            },
            "coupon_number":{
                "value":body.coupon_number
            },
            "product_id":{
                "value":body.product_id
            },
            "coupon":{
                "value":body.coupon
            },
            "集計用":{
                "value":totalKey
            }
        }
    }
    console.log(postBody);
    const options = {
        method: 'POST',
        headers : headers,
        body: JSON.stringify(postBody)
    }
    const res = await fetch(url, options)
    return res;
});

// クーポン利用履歴アプリへ登録
coupon.post('achievement',async(c) => {
    const url = 'https://jb-foodloss-service.cybozu.com/k/v1/record.json'

    // kintoneのAPIトークン
    const achievementToken = 'Nf25r39ldkKO1qgTfgbywZS1QIaS779iXUKDDhiO'
    const scheduleToken = 'bHUPka7lkq3jsFNe16Six1tAzACceo1cDBi6Xzd3'

    const headers = {
        'Content-Type': 'application/json',
        "X-Cybozu-API-Token": achievementToken+","+scheduleToken
    }
    const body = await c.req.json();

    const postBody = {
        "app":8,
        "record":{
            "coupon_lu":{
                "value":body.coupon_lu
            }
        }
    }
    const options = {
        method: 'POST',
        headers : headers,
        body: JSON.stringify(postBody)
    }
    const res = await fetch(url, options)
    return res;
});

coupon.get('test', (c) => c.text('coupon'));