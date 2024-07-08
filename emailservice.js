// Example implementation using nodemailer or your preferred email service
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password'
            }
        });

        await transporter.sendMail({
            from: 'your-email@gmail.com',
            to,
            subject,
            text
        });

        console.log('Email sent');
    } catch (err) {
        console.error('Email error:', err);
    }
};

module.exports = { sendEmail };
