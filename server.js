const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/send-email', async (req, res) => {
const { name, email, message } = req.body;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
    },
});

const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New message from your website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
};

try {
    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
} catch (error) {
    console.error(error);
    res.sendStatus(500);
}
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
