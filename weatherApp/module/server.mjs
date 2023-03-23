import * as http  from "http";
import * as data from "./weatherDb.mjs"

const port = 8000;
http.createServer((req,res)=>{
res.setHeader("Access-Control-Allow-Origin", "*");
   
if(req.url === '/about') {
    res.write(JSON.stringify(data.weatherData));  
    res.end(); 
 } else {
    res.write(`<h1>Hello World!</h1>`); 
    res.end(); 
 }

}).listen(port, ()=>{
    console.log(`Server created at ${port}`)
})