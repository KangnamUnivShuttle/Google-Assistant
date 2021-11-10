const express = require('express')
const app = express()
const port = 3000
const {actionssdk} = require('actions-on-google');
const googleApp = actionssdk({debug: true});

// https://github.com/actions-on-google/actionssdk-say-number-nodejs/blob/master/functions/index.js
googleApp.intent('actions.intent.MAIN', (conv) => {
    conv.ask('<speak>Hi! <break time="1"/> I can read out an ordinal like ' +
        '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>');
});
  
googleApp.intent('raw.input', (conv, input) => {
    const number = conv.arguments.get('ordinal');
    conv.ask(`<speak>You said, <say-as interpret-as="ordinal">${number}</say-as></speak>`);
});
  
  //Handles in-dialog conversation
  googleApp.intent('actions.intent.TEXT', (conv, input) => {
    if (input === 'bye') {
        return conv.close('Goodbye!');
    }
    conv.ask(`<speak>You said, <say-as interpret-as="ordinal">${input}</say-as></speak>`);
});

app.use(express.json())

app.get('/get', (req, res) => {
    console.log('get', req.params, req.query)
    res.send('Hello World!')
})

app.post('/post', (req, res) => {
    console.log('post', req.body)
    res.send('Hello World!')
})

// https://github.com/actions-on-google/actions-on-google-nodejs
app.post('/fulfillment', googleApp)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})