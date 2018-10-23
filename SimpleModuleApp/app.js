function program1(){
    console.log("This is Program 1");
}
function program2(){
    console.log("This is Program 2");
}
function program3(){
    console.log("This is Program 3");
}
module.exports.program1 = program1;
module.exports.program2 = program2;
module.exports.program3 = program3;

const startProgram = require("./startProgram");
startProgram.startProgram(1, "Program 1", "program1");
startProgram.startProgram(6, "Program 2", "program2");
startProgram.startProgram(3, "Program 3", "program3");