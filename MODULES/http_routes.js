// const e = require('express');
const weatherData=require("./weatherDb-copy.js");
// const { log } = require('console');
const http = require('http');
// const { it } = require("node:test");
const port = 200; 

// const weatherDatax = {
//     data: {
//         location: 'kolkata',
//     },
//     name: 'visal',
//     age: 'OK'
// };

function getRoutesBasedData(route) {
    let status = 200;

  let locData = {};
  let loc = route.split('/')[1];
  for(let i = 0;i<weatherData.length;i++)
  {
    if(weatherData[i].location === loc)
    {
        locData = weatherData[i];
    }
  }





    return JSON.stringify({
    //    status,
    //    route,
    //    location : loc,
       weatherData:locData,
    })
}

// function getRequestData(req) {
//     if (req.url === '/') {
//         var q=url.parse(req.url,true);
//         console.log(q.query.cname);
//     //    return getRoutesBasedData(req.url, weatherData)
//     } else if(req.url === '/name') {
//         // return  getRoutesBasedData(req.url, weatherData)
//     } else {
//         // return getRoutesBasedData('NOT FOUND', weatherData)
//     }
// }

function getRequestData(req)
{
    if(req.url === '/')
    {
        //res.write(JSON.stringify(weatherData));
        return JSON.stringify(weatherData);
    }
    else{
       return getRoutesBasedData(req.url);
    }
}



const ourServer = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(getRequestData(req));
});
  
ourServer.listen(port, () => {
    console.log('port ... ', port);
})