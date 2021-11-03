const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/get', (req, res) => {
    console.log('get', req.params, req.query)
    res.send('Hello World!')
})

app.post('/post', (req, res) => {
    console.log('post', req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})