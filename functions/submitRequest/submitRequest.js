const nodemailer = require('nodemailer');
const { stringify } = require('postcss');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body)
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
    console.log("info: ", info)
    return {
        statusCode: 200,
        body: JSON.stringify({message:'Succes!'}),
    }
}