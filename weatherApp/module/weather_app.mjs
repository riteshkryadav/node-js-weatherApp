import * as city from './weatherDb.mjs';
import * as functions from "./dbOp.mjs";
import * as file from './fileOps.mjs';
function getWeatherData( place ) {
    const result = city.weatherData.find(function(e){
        if (e.location == place) return e;
    });
    console.log(result);
}

const res = process.argv[2];
getWeatherData(res);

function cityData(){
    let cityList=city.weatherData;
    console.log('list of cities')
    for (let i=0; i<cityList.length;i++){
        console.log(cityList[i].location);
    }
}
cityData();

// console.log("Adddding");
// functions.addData();
// console.log(city.weatherData);

// console.log("Deleting");
// functions.del();
// console.log(city.weatherData);

console.log("Update");
functions.update();
console.log(city.weatherData);


file.fileWrite();