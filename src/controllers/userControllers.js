const User=require('../models/user')
const moment=require('moment')

function phonenumber(inputtxt)
{
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if((inputtxt.match(phoneno)))
        return true
    else
        return false
}

const addForms=async(req,res,next)=>{
    try{
        const {name,email,number,dateOfBirth}=req.body
        const preUser=await User.findOne({email:email})
        if(preUser){
            res.json({
                success:false,
                error:'Email already registered'
            })
        }else if(moment().diff(dateOfBirth, 'years',false)<18){
            res.json({
                success:false,
                error:'Age must be greater than 18'
            })
        }
        else if(!phonenumber(number)){
            res.json({
                success:false,
                error:'Enter a valid number'
            })
        }
        else{
            const user=await User.create({name,email,number,dateOfBirth})
            if(user){
                res.json({
                    success:true,
                    data:user
                })
            }else{
                res.json({
                    success:false,
                    error:'Invalid user data'
                })
            }
        }
    }catch(e){
        if(e.name==='ValidationError'){    
            res.json({
                success:false,
                error:e.message.split(":")[2]
            })   
        }else{    
            console.log(e)
            res.status(500).json({
                success:false,
                error:'Server Error'
            })
        }
    }
}

const getForms=async(req,res,next)=>{
    try{
        const users=await User.find()
        if(users){
            res.status(201).json({
                success:true,
                data:users
            })
        }else{
            res.status(404).json({
                success:false,
                error:'Users not Found'
            })
        }
    }catch(e){
        res.status(400).json({
            success:false,
            error:e
        })
    }
}

module.exports={addForms,getForms}