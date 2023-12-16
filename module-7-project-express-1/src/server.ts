import app from './app';
import {Server} from 'http';
const PORT=5000;
let server:Server;
async function Bootstrap(){
    server=app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })  
}
// nicher part tuku function er vitor nia jabo.
// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`)
//   })
Bootstrap();