const mongoose=require('../database/db');
const Schema = mongoose.Schema

var dishSchema=  new Schema({
    dishName: {
       type: String,
    //    required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    // isDelete: {
    //     type: Boolean,
    //     default: false
    // },
    ingrediants: [String],
    
}, {
    timestamps: true
});

const Dish=mongoose.model('Dish', dishSchema);
module.exports= Dish;