const mongoose = require('mongoose')

const Schema=mongoose.Schema


const userSchema=new Schema({
      name:{
            type: String,
            required: true
      },
      phoneNumber:{
            type: 'string',
            required: true
      },
      role:{
            type:String,
            enum:['Farmer','Dealer','Shop-keeper'],
            default:'Farmer'
      },
      profilePhoto:{
            type:'string',
            default: null
      },
      address:{
            type:'string',
            default: null
      }
})

const userModel=mongoose.model('User',userSchema);

module.exports={
      userModel:userModel
}