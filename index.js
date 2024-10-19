const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors');
const emailTemplate = require('./emailTemplate.js');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Server is running properly 😁');
}); // Default route


const transporter = nodemailer.createTransport({   // SMTP Configuration for Zoho Mail as email service provider
    
        host: 'smtppro.zoho.in', // Zoho SMTP host
        port: 465, // Zoho SMTP port
        secure: true, // Use SSL/TLS for secure connections
        auth: {
        user: 'noreply@shotlin.com', // Replace with your email address
        pass: 'bggEaS7G4vjV'
        },
    });


    const emailsend = (recipientEmail) => {
        const mailOptions = {
            from: 'Shotlin <noreply@shotlin.com>', // Sender's email address
            to: recipientEmail, // Recipient's email address
            subject: 'Thank you for your interest in our upcoming website!', // Email subject
            html: emailTemplate, // Email content in HTML format
        };  
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent:', info.messageId);   
                res.send('Email sent successfully!');   
            }
        });
    }       
// Send email route
app.post('/api/send-email', async (req, res) => {
    const { recipientEmail } = req.body;
    console.log(recipientEmail);
    emailsend(recipientEmail);
    res.send('Email sent successfully!');
});


app.listen();
