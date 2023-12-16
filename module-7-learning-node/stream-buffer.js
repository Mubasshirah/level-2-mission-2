// creating a server using  raw node.js and streaming a file
// creating a server
// const http=require('http');
// const server=http.createServer();

// // listener
// server.on('request',(req,res)=>{
    
//     console.log(req.url,req.method);
//     res.end("hello world")
// })
// server.listen('5000',()=>{
//     console.log('running on 5000')
// })

// streaming a file
// const http=require('http');
// const fs=require('fs');
// const server=http.createServer();
// server.on('request',(req,res)=>{
//     if(req.url==='/read-file' && req.method==='GET');
//     const readableStream=fs.createReadStream(process.cwd()+'/text/read.txt');
//     readableStream.on('data',(buffer)=>{
//         res.statusCode=200;
//         res.write(buffer);
//     })
//     console.log(req.url,req.method);
//     readableStream.on('end',()=>{
//         res.statusCode=200;
//         res.end("hello world")
//     }) 
//     // file name error korle aita show korbe
//     readableStream.on('error',(error)=>{
//         console.log(error);
//         res.statusCode=500;
//         res.end("something went wrong");
//     }) 
// })
// server.listen('5000',()=>{
// console.log('running on 5000');
// });





