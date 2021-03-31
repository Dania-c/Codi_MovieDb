const express = require('express')
const app = express()
const t =new Date();
const router = express.Router();
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]



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
//create
  app.get('/movies/create',(req, res) =>{
    res.send({status:200, message:"create , "});
  });

 app.get('/movies/read', (req, res) => {
  res.send(
  {
   status:200,
   data:movies
  }
)
})
// sort by date

app.get('/movies/read/by-date',  (req, res)=> {

  var byDate=[...movies];
  
  byDate.sort((a,b)=>{return a.year - b.year});
  
  res.send( {status:200,data:byDate})
})

// sort by rate

app.get('/movies/read/by-rating',  (req, res)=> {

  var byrating_desc=[...movies];
  
  byrating_desc.sort((a,b)=>{return b.rating - a.rating});
  
  res.send( {status:200,data:byrating_desc})
})

// sort by title

app.get('/movies/read/by-title',  (req, res)=> {

  var byTitle=[...movies];
  
  byTitle.sort(( a,b)=>{return a.title.toLowerCase().localeCompare(b.title.toLowerCase())});
  
  res.send( {status:200,data:byTitle})
})

 //end read
  app.get('/movies/update', (req, res)=> {
    res.send({status:200, message:"update , "});
  });
  app.get('/movies/delete',  (req, res) => {
    res.send({status:200, message:"delete , "});
  });


app.listen(3000)
