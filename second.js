// Module Wrapper Function

// (function(exports,require,module,__filename,__dirname){

// });


// The Above function is called wrapper functionour Node.js wrap every function is this automatically

console.log(exports,require,module,__filename,__dirname);

tahmeer = {
    Age : 21,
    Education : "Undergraduate",
    Status : "Un Married",
    Gmail : "Tahmeer@gmail.com"

}
module.exports = tahmeer;