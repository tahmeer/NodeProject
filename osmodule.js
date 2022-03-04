// This is OS which is built in function or liberary Which ald do offer many functions as mention in node js document.


// OS Module and Ecma script module
// for using ecma js module you have to import mjs extension


const { Module } = require('module');      //This is exmaple of common js module. Common js module import in this WebAssembly
const OS = require('os');
const { fileURLToPath } = require('url')

// console.log(OS.freemem());
console.log(OS.homedir());