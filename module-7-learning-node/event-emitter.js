const eventEmitter=require('events');
const myEmitter=new eventEmitter;
// evetEmitter thk akta instance toiri kora hoise myEmitter name e.

// then event Linstener toiri kora hbe 'birthday' name e akta event er jnno. ak ba ak er odhik.

myEmitter.on('birthday',()=>{
    console.log('Happy Birthday');
});
myEmitter.on('birthday',()=>{
    console.log('i sent u a gift')
});

// erpor event ke emit kora hoile oi event er jnno jto gullo listener ase sob gulo tader callback pathabe. that means console e ja ase segulo output e dekhabe.
myEmitter.emit('birthday')

// => chaile amra event er sathe parameter o pathaite pari.
myEmitter.on('birthday',()=>{
    console.log('Happy Birthday');
});
myEmitter.on('birthday',(gift)=>{
    console.log(`i sent u a ${gift}`)
});
myEmitter.emit('birthday','watch')