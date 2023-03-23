import * as fs from "fs";
import * as mainFile from "./fileManager.mjs";

export function fileCreate() {
  fs.writeFileSync(mainFile.userInput, "w");
  
}

export function fileDelete() {
  console.log("here we go");
  fs.unlink(mainFile.userInput, function (err) {
    if (err) throw err;
    console.log("File deleted!");
  });
}

export function fileAppend() {
  console.log("here we go");
  fs.appendFile(
    mainFile.userInput,
    mainFile.userData,
    "utf8",
    function (err) {
      if (err) throw err;
      console.log("Data is appended to file successfully.");
    }
  );
}

export function deleteData() {
  console.log("here we go");
  fs.truncate(
    mainFile.userInput,
    function (err) {
      if (err) throw err;
      console.log("Data is deleted data successfully.");
    }
  );
}
