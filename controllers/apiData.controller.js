//apiData function 
const axios=require('axios')

require ('dotenv').config()
const apiUrl=process.env.API_URL

const apiData =(req,res)=>{
    axios.get(`${apiUrl}`).then(response=>{
        //entibhe hone kef bdek te3male access 3al data ele bdek yaha
        res.send(response.data.data)
    }).catch(error=>res.send(error.message))
}

module.exports=apiData