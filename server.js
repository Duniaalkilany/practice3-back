const express=require('express')
const cors=require('cors')
const axios=require('axios')
const mongoose=require('mongoose')

const app=express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const PORT=process.env.PORT
//connect mongoose 
mongoose.connect('mongodb://localhost:27017/art', {useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongodb is connected!');
});

//require functions
const apiData =require('./controllers/apiData.controller')
const {createFav,getFav,deletFav,updateFav}=require('./controllers/crud.controller')
//end points

app.get('/',(req,res)=>
{
    res.send('hello from the back end')
})

app.get('/apidata',apiData)
app.post('/favourite',createFav)
app.get('/favourite',getFav)
app.delete('/favourite/:id',deletFav)
app.put('/favourite/:id',updateFav)


//
app.listen(PORT,()=>console.log(`Running on PORT :  ${PORT}`))