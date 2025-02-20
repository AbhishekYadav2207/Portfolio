const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
        user: 'royalgamer0718@gmail.com', // Your email
        //pass: 'lhjq zymf jqde qelj' // Your email password or app password
        pass: 'eplm pnqo qcnx iaat'
    }
});

const mailOptions = {
    from: 'abhishekpaleru0@gmail.com',
    to: 'royalgamer0718@gmail.com', // Change this to your email
    subject: 'Test Email',
    text: 'This is a test email from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ', error);
    }
    console.log('Email sent: ' + info.response);
});