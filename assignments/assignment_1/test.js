const readline = require("readline");
const rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter Name : ", (name) => {
    console.log(name);
    rl.close();
})