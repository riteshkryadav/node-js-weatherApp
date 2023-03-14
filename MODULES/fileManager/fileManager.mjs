
import * as create from './create.mjs'
export let userinput;
export let userdata;
let input=process.argv;
if(input[2]==null){
    console.log("Enter 1  for  create")
    console.log("Enter 2  for  delete")
    console.log("Enter 3  for  add data")
    console.log("Enter 4  for  delete data")

}
else if(input[3]!=null && input[2]=="1"){
    userinput=input[3];
    create.filecreate();
    console.log("file created")

    
}

else if(input[3]!=null && input[2]=="2"){
    userinput=input[3];
    create.filedelete();
    console.log("file deleted")

    
}

else if(input[3]!=null && input[4]!=null && input[2]=="3"){
    userinput=input[3];
    userdata=input[4] ;
    create.fileAppend();
}

else if(input[3]!=null && input[2]=="4"){
    userinput=input[3];
    
    create.deletedata();
}




