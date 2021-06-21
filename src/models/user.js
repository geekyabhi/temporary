const mongoose=require('mongoose')
const validator=require('mongoose-validator')

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        lowercase: true,
        trim: true,
        validate: [
            validator({
                validator: 'isEmail',
                message: 'Please enter valid email'
            })
        ],
        required: true
    },
    number:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    }
},{
    timestamps:true
})

const User=mongoose.model('User',schema)

module.exports=User