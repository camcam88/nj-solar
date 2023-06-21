const nodemailer = require('nodemailer');
const { Headers } = require('netlify-functions');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

exports.handler = async (event, context, callback) => {
    const body = JSON.parse(event.body)
    console.log('body: ', body)
    console.log('event: ', event)
    //test send email
    if(body.potHead) {
        return {
            statusCode: 400,
            body: JSON.stringify({message:'ERROR: XX!!!&&R$^#'})
        }
    }

    const info = await transporter.sendMail({
        from: `${body.email}`,
        to: "NJsolar@example.com",
        subject: `New Request!`,
        html: `<p>New order: from ${body.firstName} ${body.email}</p><br/>
        <ul>
        <li>System: ${body.system}</li>
        <li>PricePerWatt: ${body.ppw} </li>
        <li>Exposure Adjustment: ${body.exposure}</li>
        <li> Min Watt K: ${body.minWat}</li>
        <li>Discounted Price Est: ${body.priceEst}</li>
        
        </ul>`,
    })
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type');
        try {
            // Perform necessary operations
            console.log('info try: ', info)
            const response = {
                statusCode: 200,
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: 'Success' }),
            };
            console.log('response: ', response)

            callback(null, response);
            } catch (error) {
                console.log('error: ', error)
            const errorResponse = {
                statusCode: 500,
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ error: 'Internal Server Error' }),
            };
        
            callback(null, errorResponse);
        }
}