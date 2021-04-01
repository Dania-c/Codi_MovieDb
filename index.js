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
    res.status(200).send("okkk")
  })
  app.get('/time', (req, res) => {
    // res.status(200).send(`${t.getHours()+":" + t.getSeconds()}`)
    res.status(200).send(t.getHours()+":" + t.getSeconds())
  })


//   app.get('/hello/:id', (req, res) => {
//     res.send({
//         status:200,
//         message:"Hello , "+req.params.id
//    }   )
//   })
app.get('/hello/:id', function (req, res) {
    res.status(200).send("Hello , "+req.params.id);
  });


  app.get('/search',function(req,res){

    if(req.query.s){
    res.status(200).send("data : "+req.query.s);
      }else{
        res.send( {status:500, error:true, message:"you have to provide a word to search for "});
        
    }
  });
//create
  app.get('/movies/create',(req, res) =>{
    res.send({status:200, message:"create , "});
  });

//read

 app.get('/movies/read', (req, res) => {
  res.status(200).send(movies)
})
// sort by date

app.get('/movies/read/by-date',  (req, res)=> {

  var byDate=[...movies];
  
  byDate.sort((a,b)=>{return a.year - b.year});
  
  res.status(200).send(byDate)
})

// sort by rate

app.get('/movies/read/by-rating',  (req, res)=> {

  var byrating_desc=[...movies];
  
  byrating_desc.sort((a,b)=>{return b.rating - a.rating});
  
  res.status(200).send(byrating_desc)
})

// sort by title

app.get('/movies/read/by-title',  (req, res)=> {

  var byTitle=[...movies];
  
  byTitle.sort(( a,b)=>{return a.title.toLowerCase().localeCompare(b.title.toLowerCase())});
  
  res.status(200).send(byTitle)
})

// read by id 
//
app.get('/movies/read/id/:id',  (req, res)=> {

var byTitle=[...movies];

if (byTitle.length>=req.params.id) {res.status(200).send( byTitle[req.params.id-1])}
else
{
  res.sendStatus(404); 
  res.send( {status:404,error:true,message:`the movie ${req.params.id} does not exist`})
  //res.status(404).send(err.message)
}
})


 //end read
  app.get('/movies/update', (req, res)=> {
    res.send({status:200, message:"update , "});
  });
  app.get('/movies/delete',  (req, res) => {
    res.send({status:200, message:"delete , "});
  });


app.listen(3000)
