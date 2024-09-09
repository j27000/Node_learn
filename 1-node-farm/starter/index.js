import fs from 'fs';
const  textin = fs.readFileSync('./txt/input.txt' ,'utf-8');
console.log(textin);
const write = " Hi i am naman jhala"
 fs.writeFileSync('./txt/output.txt', write);
 console.log("Written Operation SuccessFull");
