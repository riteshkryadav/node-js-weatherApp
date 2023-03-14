import * as fs from 'fs';
import * as mainFile from './fileManager.mjs';
export function filecreate() {
    console.log("here we go");
    fs.open(mainFile.userinput,'w',function(err,f){
        console.log('saved!');
    });
}

export function filedelete() {
    console.log("here we go");
    fs.unlink(mainFile.userinput, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
    });
}


export function fileAppend(){
    console.log("here we go");
    fs.appendFile(mainFile.userinput,mainFile.userdata, 'utf8',
    // callback function
    function(err) {     
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});
}

export function deletedata(){
    console.log("here we go");
    fs.truncate(mainFile.userinput,
    // callback function
    function(err) {     
        if (err) throw err;
        // if no error
        console.log("Data is deleted data successfully.")
});
}

