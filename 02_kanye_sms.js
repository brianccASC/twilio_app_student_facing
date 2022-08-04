const request = require('request');

const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

let messageRecipient = process.argv[2];
let messageBody;

request(
    // Missing API endpoint
    '', 
    { json: true }, 
    (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
    }
);

client.messages.create(
    {
        body: '',
        from: '',
        to: ''
    }).then(
        message => console.log(message.sid)
    );
