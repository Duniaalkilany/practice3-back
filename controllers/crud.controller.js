//crud operations functions 

const ArtModel=require('../models/mongoose.model')

const createFav=(req,res)=>{
    const {id, description, name,title,image_id}=req.body
    ArtModel.find({id:id},(erroe,data)=>{


        if(data.length>0){
            res.send('already exist')
        }else{
const newArtModel=new ArtModel({
    id:id,
    name:name,
    description:description,
    title:title,
    image_id:image_id

})
newArtModel.save()
res.send(newArtModel)

        }}
    )}


    /*=========================================================*/

    const getFav=(req,res)=>{
        ArtModel.find({},(error,data)=>{
            if (error){
                res.send(error.message)
            }else{
                res.send(data)
            }
        }) 
    }

    /*==============================================================*/


const deletFav=(req,res)=>{
const id=req.params.id
ArtModel.deleteOne({id:id},(error,data)=>{
    if(error){res.send(error.message)}else{
        res.send(data)
    }
})
}

/*=========================================================================*/
const updateFav=(req,res)=>{
const choosenId=req.params.id
const {description,name,title}=req.body
ArtModel.findOne({id:choosenId},(error,data)=>{
if(error){res.send(error.message)
}else{
    data.description=description
    data.name=name
    data.title=title

    data.save()
    res.send(data)
}})
}












    module.exports={
        createFav, getFav ,deletFav,updateFav 
    }