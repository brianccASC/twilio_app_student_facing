require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

// Recipient phone number
let messageRecipient = process.argv[2];

// Message for recipient
let messageBody = process.argv[3];

client.messages.create(
    {
        body: messageBody,
        from: twilioNumber,
        to: messageRecipient
    }
).then(
    message => console.log(message.sid)
);