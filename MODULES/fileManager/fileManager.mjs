import * as fileManagerFunction from "./fileManagerFunction.mjs";
export let userInput;
export let userData;
let input = process.argv;
var taskNumber = input[2];
var fileName = input[3];
userData = input[4];
if (taskNumber === undefined) {
  console.log("Enter 1  for  create file");
  console.log("Enter 2  for  delete file");
  console.log("Enter 3  for  add data in the file");
  console.log("Enter 4  for  delete data from the file");
} else if (input[3] !== undefined && taskNumber === "1") {
  userInput = fileName;
  fileManagerFunction.fileCreate();
  console.log("File Created");
} else if (fileName !== undefined && taskNumber === "2") {
  userInput = fileName;
  fileManagerFunction.fileDelete();
  console.log("File Deleted");
} else if (fileName !== undefined && userData !== null && taskNumber === "3") {
  userInput = fileName;
  fileManagerFunction.fileAppend();
} else if (fileName !== undefined && taskNumber === "4") {
  userInput = fileName;
  fileManagerFunction.deleteData();
}
