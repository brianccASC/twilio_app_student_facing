const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

let messageRecipient = '';
let messageBody = '';

client.messages.create(
    {
        body: '',
        from: '',
        to: ''
    }).then(
        message => console.log(message.sid)
    );
