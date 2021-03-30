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


//   app.get('/hello/:id', (req, res) => {
//     res.send({
//         status:200,
//         message:"Hello , "+req.params.id
//    }   )
//   })
app.get('/hello/:id', function (req, res) {
    res.send({status:200, message:"Hello , "+req.params.id});
  });


  app.get('/search',function(req,res){

    if(req.query.s){
    res.send({status:200, message:"data : "+req.query.s});
  
  
    }else{
  
      res.send( {status:500, error:true, message:"you have to provide a word to search for "});
    }
  
  });


app.listen(3000)
