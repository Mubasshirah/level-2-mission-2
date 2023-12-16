// kono akta fileke read kora jay node er built in module dia...utf-8 use hoise output ke string e convert korar jnno.

const fs=require("fs");
const readText=fs.readFileSync('./text/read.txt','utf-8')
console.log(readText)
// kono akta file write korte
const writeText=fs.writeFileSync('./text/write.txt',readText + 
'this is my written text');
// write.txt name e akta file create hbe text folder e.
console.log(writeText)

// *ekhne synchronous way te kora