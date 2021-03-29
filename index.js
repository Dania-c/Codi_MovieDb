const express = require('express')
const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/', function (req, res) {
//     res.sendStatus(200)
//   })

  app.get('/', (req, res) => {
    res.send('ok')
  })
// app.use((req,res,next)=>{
//     console.log('Middlwarew');
//     next();
// }) 

//   app.use((req,res,next)=>{
//       res.send('<form method="POST"><input type="text" name="username"><button type = submit>Create user</button></formM')
//   })


app.listen(3000)
