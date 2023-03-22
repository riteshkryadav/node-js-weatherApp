import * as create from "./create.mjs";
import * as readline from "readline";
// var rl = readline.createInterface(process.stdin, process.stdout);

// rl.question(`Enter 1  for  create file \n Enter 2  for  delete file \n Enter 3  for  add data in the file \n Enter 4  for  delete data from the file`, function(answer) {
//     // ask a question to interact with user.

export let userinput;
export let userdata;
let input = process.argv;
if (input[2] === undefined) {
  console.log("Enter 1  for  create file");
  console.log("Enter 2  for  delete file");
  console.log("Enter 3  for  add data in the file");
  console.log("Enter 4  for  delete data from the file");
} else if (input[3] !== undefined && input[2] === "1") {
  userinput = input[3];
  create.filecreate();
  console.log("file created");
} else if (input[3] !== undefined && input[2] === "2") {
  userinput = input[3];
  create.filedelete();
  console.log("file deleted");
} else if (input[3] !== undefined && input[4] !== null && input[2] === "3") {
  userinput = input[3];
  userdata = input[4];
  create.fileAppend();
} else if (input[3] !== undefined && input[2] === "4") {
  userinput = input[3];
  create.deletedata();
}
// console.log("Have a great day!");
