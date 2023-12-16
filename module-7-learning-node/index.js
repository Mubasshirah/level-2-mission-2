// local modules
const modules=require('./local-1');

// add,a ke arekta variable er akare import korlm.
console.log(modules.add(2,3),modules.a);

// destructuring o kora jay
const {add,a }=require('./local-1')
console.log(add(2,3),a);
// ----------------------------------------------------------
// same name e onno file e variable thakle sta export kore import korar por name alias use kote hoa. noeto ager variable tai bujhe nay and sei onujaye result day.
const {add:add2,a:a2 }=require('./local-2')
console.log(add2(2,3,4),a2);