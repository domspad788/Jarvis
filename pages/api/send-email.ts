import nodemailer from 'nodemailer';

// Configure nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
    },
});

// Function to send email
export const sendEmail = async (to, subject, templateData) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: generateTemplate(templateData),
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Function to generate email template
const generateTemplate = (data) => {
    // Customize your email template here using data
    return `<h1>Hello ${data.name}</h1><p>${data.message}</p>`;
};

