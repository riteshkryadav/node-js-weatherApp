const weatherData=require("./weatherDb-copy.js");

const http = require('http');

const port = 200; 

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
       weatherData:locData,
    })
}

function getRequestData(req)
{
    if(req.url === '/')
    {
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