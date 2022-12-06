const Dish= require('../models/dish_schema')
// const dotenv = require("dotenv")
// let Promise = require("promise")

// dotenv.config();                         //Configuring .env

//add dish 
const addDish= async (req, res)=>{
    try{
        const dishInf= req.body
        console.log("dishInf", dishInf)
        const dishData= await Dish.create({
            dishName: dishInf.dishName,
        })
        console.log("kishan", dishData)
        return res.status(200).send({
            message:"admin rest add succuess!", 
            data: dishData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}


// all restaurant get information
const allDishs= async (req, res)=>{
    try{
        const restData= await Dish.find()
        return res.status(200).send({
            message:"get all hotel list ", 
            data: restData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}


// one restaurant get details
const dishDetails= async (req, res)=>{
    try{
        console.log(req.params.id)
        const restData= await Dish.findById({
            _id: req.params.id
        })
        console.log("restData", restData)
        if (!restData || restData==undefined){ 
            return  res.send("not found restaurant")
        }
        return res.status(200).send({
            message:"user resitered save data", 
            data: restData
        })
    }
    catch(err){
        console.log(err.message)
    }   
}


const updateDish= async (req, res)=>{
    try{
        console.log("req.body", req.body)
        let dishNames=req.body.dishName

        const product= await Dish.findById({_id: req.params.id});
        product.dishName= dishNames;
        await product.save({validateBeforeSave: false});
        console.log("updateData", product)
        return res.send({status: "update data successfully! ", "result": product})
    }
    catch(err){
        console.log(err.message)
    }
}

//search hotel
const searcDish= async(req,res)=>{
    try{
        const {dishName}= req.query
        const searchInfo= await Rests.find({
            dishName: dishName,
        })
        console.log("searchInfo", searchInfo)
        if(!searchInfo.length>0){
            return res.send({
                message: "Not found Dish!", data: searchInfo
            }) 
        }
        return res.send({
            message: "find Dishes successfully!", data: searchInfo
        })
    }catch(err){
        console.log(err.message)
    }
}


module.exports= {
    addDish,
    allDishs,
    dishDetails,
    searcDish,
    updateDish
}