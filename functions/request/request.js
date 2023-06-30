const postmark = require("postmark");

// generate a test email    
const generateOrderEmail = ({ firstName, lastName, email, priceEst }) => `
    <div>
        <h2>Your order for ${priceEst} is confirmed!</h2>
        <p>Your order will be shipped to ${firstName} ${lastName} at ${email}</p>
    </div>
`

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

exports.handler = async (event, context) => {
    console.log('body: ', JSON.parse(event.body))
    const { firstName, lastName, email, priceEst } = JSON.parse(event.body)
    const requiredFields = [firstName, lastName, email, priceEst]

    const message = {
        "From": "info@newjerseysolardeals.com",
        "To": "info@newjerseysolardeals.com",
        "Subject": `${firstName} ${lastName} just placed an order!`,
        "HtmlBody": `${generateOrderEmail({ firstName, lastName, email, priceEst })}`,
        "TextBody": "Order confirmation",
        "MessageStream": "outbound"
    }
    
    await client.sendEmail(message)
        .then(response => {
            console.log('Email sent successfully:', response.Message);
        })
        .catch(error => {
            console.error('Error sending email:', error);
    });

    return {
        statusCode: 200,
        body: JSON.stringify({message:'success'})
    }
    // check if all required fields are filled out
    if (!requiredFields.every(field => field)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: `Required information is missing. Field: ${field}` })
        }
    }
}
