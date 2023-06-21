const nodemailer = require('nodemailer');


// generate a test email    
const generateOrderEmail = ({ firstName, lastName, email, priceEst }) => `
    <div>
        <h2>Your order for ${priceEst} is confirmed!</h2>
        <p>Your order will be shipped to ${firstName} ${lastName} at ${email}</p>
    </div>
`


// create a transport for Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

exports.handler = async (event, context) => {
    console.log('body: ', JSON.parse(event.body))
    const { firstName, lastName, email, priceEst } = JSON.parse(event.body)
    const requiredFields = [firstName, lastName, email, priceEst]

    // check if all required fields are filled out
    if (!requiredFields.every(field => field)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: `Required information is missing. Field: ${field}` })
        }
    }

    // send the message
    const info = await transporter.sendMail({
        from: "test@example.com",
        to: `NJsolar@example.com, ${email}`,
        subject: `New Request!`,
        html: generateOrderEmail({ firstName, lastName, email, priceEst })
    })
    console.log('info: ', info)

    return {
        statusCode: 200,
        body: JSON.stringify(info)
    }
}


