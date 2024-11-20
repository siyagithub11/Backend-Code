require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res)=>{
res.send('siya.com')
})
app.get('/logn',(req,res)=>{
    res.send('<h1>please login</h1>')
})

app.listen(ProcessingInstruction.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})