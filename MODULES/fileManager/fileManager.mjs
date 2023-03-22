import * as create from "./create.mjs";
import * as readline from "readline";


// var rl = readline.createInterface(process.stdin, process.stdout);

// rl.question(`Enter 1  for  create file \n Enter 2  for  delete file \n Enter 3  for  add data in the file \n Enter 4  for  delete data from the file`, function(answer) {
//     // ask a question to interact with user.

export let userinput;
export let user_data;
let input = process.argv;
var task_number=input[2];
var file_name=input[3];
user_data=input[4];
if (task_number === undefined) {
  console.log("Enter 1  for  create file");
  console.log("Enter 2  for  delete file");
  console.log("Enter 3  for  add data in the file");
  console.log("Enter 4  for  delete data from the file");
} else if (input[3] !== undefined && task_number === "1") {
  userinput = file_name;
  create.filecreate();
  console.log("file created");
} else if (file_name !== undefined && task_number === "2") {
  userinput = file_name;
  create.filedelete();
  console.log("file deleted");
} else if (file_name !== undefined && user_data !== null && task_number === "3") {
  userinput = file_name;
//   userdata = input[4];
  create.fileAppend();
} else if (file_name !== undefined && task_number === "4") {
  userinput = file_name;
  create.deletedata();
}
// console.log("Have a great day!");
