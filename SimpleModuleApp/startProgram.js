const app = require("./app");
function startProgram(waitTime, programName, program){
    console.log("*** Starting "+programName+" in "+waitTime+" seconds ***")
    setTimeout(() => {
        console.log("*** Starting "+programName+" ***");
        app.program;
    }, waitTime*1000);
    
};
module.exports.startProgram = startProgram;