// const express = require('express')
import express, { NextFunction, Request, Response } from 'express'
import { hostname } from 'os';
const app = express();

// parser
app.use(express.json());
app.use(express.text());
// parser

// middleware
const userRouter=express.Router();
app.use('/api/v1/users',userRouter);
userRouter.post('/create-user',(req:Request,res:Response)=>{
    const  user=req.body;
    console.log(user);
    res.json({
        success:true,
        message:"user created successfully",
        data:user
    })
})
const courseRouter=express.Router();
app.use('/api/v1/courses',courseRouter);
courseRouter.post('/create-course',(req:Request,res:Response)=>{
    const  course=req.body;
    console.log(course);
    res.json({
        success:true,
        message:"course created successfully",
        data:course
    })
})

// middleware


const logger=(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.method,req.url,req.hostname);
    next();
}

app.get('/',logger, (req:Request, res:Response) => {
    console.log(req.query);
  res.send('Hello dudebroishgfdf!')
});


// // express error handling
app.get('/',logger, async(req:Request, res:Response,next:NextFunction) => {
    try{
        res.send(something);
    }catch(error){
console.log(error);
next(error);
// res.status(400).json({
//     success:false,
//     message:"failed to get data"
// })
    } 
});

// // express error handling


app.post('/',logger,(req:Request,res:Response)=>{
    console.log(req.body);
    res.json({
        message:"data got"
    })
})
// vul route e gele 
app.use("*",(req:Request,res:Response)=>{
console.log("route not found");
res.status(400).json({
    success:false,
    message:"route not found"
})
})
// vul route e gele 


// global error handler
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    if(error){
        res.status(400).json({
            success:false,
            message:"data getting failed"
        })

    }
})
// global error handler


export default app;