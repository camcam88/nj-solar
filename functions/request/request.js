const postmark = require("postmark");
// import the succes component to send back to the client

// generate a test email    
const generateOrderEmail = ({ firstName, lastName, email, system, priceEst, address, zip, exposure, minWat, numberOfPanels, payChoice, batteryPrice,installPrice }) => `
    <div>
        <h2>New order for ${firstName} ${lastName}.</h2>
        <p>Email: ${email}</p>
        <p>System Panel Choice: ${system}</p>
        <p>Number of Panels: ${numberOfPanels}</p>
        <p>Sun Exposure: ${exposure}</p>
        <p>Min Watts: ${minWat}</p>
        <p>Panel Price: $${Math.trunc(priceEst).toLocaleString("en-US")}</p>
        <p>Install Price: $${Math.trunc(installPrice).toLocaleString("en-US")}</p>
        <p>Battery Price: $${Math.trunc(batteryPrice).toLocaleString("en-US")}</p>
        <p>Pay Choice: ${payChoice}</p>
        <p>Address: ${address}, ${zip}</p>
    </div>
`

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

exports.handler = async (event, context) => {
    console.log('body: ', JSON.parse(event.body))
    const { firstName, lastName, email,system,  priceEst, address, zip, exposure, minWat, numberOfPanels, payChoice, batteryPrice,installPrice } = JSON.parse(event.body)
    const requiredFields = [firstName, lastName, email, priceEst]

    const message = {
        "From": "info@newjerseysolardeals.com",
        "To": "info@newjerseysolardeals.com",
        "Subject": `${firstName} ${lastName} just placed an order!`,
        "HtmlBody": `${generateOrderEmail({ firstName, lastName, email, system, priceEst, address, zip, exposure, minWat, numberOfPanels, payChoice, batteryPrice,installPrice })}`,
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
