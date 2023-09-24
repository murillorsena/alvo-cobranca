const accountSid = 'AC6d70fd3eb2c69ffe29c362867e1e1770';
const authToken = 'fd46d94743e077620b93c4c877263d86';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Oi, tudo bem?',
        from: '+14788181412',
        to: '+5551980154788'
    })
    .then(message => console.log(message.sid))
    .done();