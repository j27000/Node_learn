// Syncronus reading and writing of file using Node js
// import fs from 'fs';
// const  textin = fs.readFileSync('./txt/input.txt' ,'utf-8');
// console.log(textin);
// const write = " Hi i am naman jhala"
//  fs.writeFileSync('./txt/output.txt', write);
//  console.log("Written Operation SuccessFull");

// Asyncronus reading and writing of file using Node js
// import fs from 'fs'
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     if(err)
//     {
//         console.log("Error Occured");
//     }
//     console.log(data);
//     fs.readFile('./txt/read-this.txt', 'utf-8',(err,data2)=> {
//         console.log(data2);
//         fs.writeFile('./txt/naman.txt' ,`${data} and ${data2}`,(err)=>{
//             console.log("File Written");
//         })

//     })
// });
// console.log("hum first")

//Creating Server Using Nodejs
import http from 'http'
 const server = http.createServer((req,res)=>{
    res.end('Server Says Hi')
});
server.listen(8000, '127.0.0.1',()=>{
    console.log("Listing from server on port 8000");
})

