const express=require('express')
const morgan =require('morgan')
const cors=require('cors')
require('colors')
require('dotenv').config({path:'./config/dev.env'})

const connectDB =require('./src/database/mongoose')
const userRoutes=require('./src/routes/user')

const app=express()
connectDB()
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 5000

app.use('/api/users',userRoutes)

app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`.yellow.bold)})