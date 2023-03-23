import * as city from "./weatherDb.mjs";
import * as file from "./fileOps.mjs";

export  function addData () {
    let dict = {
        location: 'Bongoan',
        lat: '21',
        lag: '13',
        condition: 
        { text: 'Overcast',
         icon: '//cdn.weatherapi.com/weather/64x64/day/122.png', code: 1009 },
        feelsLikeC: "28.8",
        gustKph: "7.2",
        gustMph: "8.1",
        humidity: "32",
        isDay: "0",
    
}
file.content.push(dict);
file.fileCreate();
};


export function del() {
    file.fileRead();
    let pos = file.content.findIndex((x) => x.location === "Mumbai");
    file.content.splice(pos, 1);
    file.fileWrite();
  }

export function update() {
    file.content.find(function (e) {
      if (e.location === "kolkata") {
        e.feelsLikeC = "35.5";
      }
    });
    file.fileWrite();
  }



