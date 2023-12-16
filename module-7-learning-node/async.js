// read write file asynchronously
const fs=require('fs');
fs.readFile('./text/read.txt','utf-8',(err,data)=>{
    if(err){
        throw Error('error reading text')
    }
    console.log(data)
fs.writeFile('./text/write2.txt',data,'utf-8',(err)=>{
    if(err){
    throw Error('error writing text')
    }
})
})
console.log('read carefully')