require('dotenv').config();

const request = require('request');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

let messageRecipient = process.argv[2];
let messageBody;

request(
	'https://api.kanye.rest', 
	{ json: true }, 
	(err, res, body) => {
		if (err) { 
			return console.log(err); 
		}
		
		console.log("Object:", body);
		messageBody = body.quote;
		
		client.messages.create(
			{
				body: messageBody,
				from: twilioNumber,
				to: messageRecipient
			}
		).then(
			message => console.log(message.sid)
		);
	}
);