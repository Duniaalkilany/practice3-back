const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ArtSchema=new Schema({
    id:{
        type:Number,
        unique:true
    },
    description:{
        type:String
    },
    name:{
        type:String
    },
    title:{
type:String
    },
    image_id:{
        type:String
    }
})

const ArtModel=mongoose.model('favarts',ArtSchema)
module.exports=ArtModel