const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})