const User=require('../models/user')

const addForms=async(req,res,next)=>{
    try{
        const {name,email,number,dateOfBirth}=req.body
        const preUser=await User.findOne({email:email})
        if(preUser){
            res.json({
                success:false,
                error:'Email already registered'
            })
        }else{
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