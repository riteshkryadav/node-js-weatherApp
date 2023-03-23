import * as fs from "fs";
import * as mainFile from "./fileManager.mjs";

export function fileCreate() {
  fs.open(mainFile.userInput, "w", function (err, f) {
    console.log("Saved!");
  });
}

export function fileDelete() {
  console.log("here we go");
  fs.unlink(mainFile.userInput, function (err) {
    if (err) throw err;
    // if no error, file has been deleted successfully
    console.log("File deleted!");
  });
}

export function fileAppend() {
  console.log("here we go");
  fs.appendFile(
    mainFile.userInput,
    mainFile.userData,
    "utf8",
    // callback function
    function (err) {
      if (err) throw err;
      // if no error
      console.log("Data is appended to file successfully.");
    }
  );
}

export function deleteData() {
  console.log("here we go");
  fs.truncate(
    mainFile.userInput,
    // callback function
    function (err) {
      if (err) throw err;
      // if no error
      console.log("Data is deleted data successfully.");
    }
  );
}
