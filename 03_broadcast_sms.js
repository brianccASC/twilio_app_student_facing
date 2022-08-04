const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

contacts = {
    '':''
}

client.messages.create(
    {
        body: '',
        from: '',
        to: ''
    }).then(
        message => console.log(message.sid)
    );
