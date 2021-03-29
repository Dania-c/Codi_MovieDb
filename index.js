const express = require('express')
const app = express()
const t =new Date();


app.get('/', (req, res) => {
    res.send('ok')
  })
  app.get('/test', (req, res) => {
    res.send(
        {
             status:200,
             message:"okkk"
        }
    )
  })
  app.get('/time', (req, res) => {
    res.send({
        status:200,
        message:`${t.getHours()+":" + t.getSeconds()}`
   }   )
  })
app.listen(3000)
