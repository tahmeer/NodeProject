// importing fs (File System)
const fs = require('fs');

fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(err,data);
})
fs.writeFile('demo1.txt','This is written by writeFile function',()=>{
    console.log("Written into file demo1.txt");
})