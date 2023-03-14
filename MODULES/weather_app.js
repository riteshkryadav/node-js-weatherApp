const prompt = require('prompt-sync')();

function getWeatherData( a ) {
    const weatherData = [{
        location: 'kolkata',
        lat: '22',
        lag: '12',
        condition: { text: 'Overcast', icon: '//cdn.weatherapi.com/weather/64x64/day/122.png', code: 1009 },
        feelslikec: "29.8",
        gust_kph: "16.2",
        gust_mph: "10.1",
        humidity: "41",
        is_day: "0",

    },
   {
        location: 'Mumbai',
        lat: '21',
        lag: '13',
        condition: { text: 'Overcast', icon: '//cdn.weatherapi.com/weather/64x64/day/122.png', code: 1009 },
        feelslikec: "28.8",
        gust_kph: "7.2",
        gust_mph: "8.1",
        humidity: "32",
        is_day: "0",

    },
    {
        location: 'Banglore',
        lat: '0',
        lag: '12',
        condition: { text: 'Overcast', icon: '//cdn.weatherapi.com/weather/64x64/day/122.png', code: 1009 },
        feelslikec: "29.8",
        gust_kph: "16.2",
        gust_mph: "10.1",
        humidity: "41",
        is_day: "0",

    },
    {
        location: 'Delhi',
        lat: '22',
        lag: '12',
        condition: { text: 'Overcast', icon: '//cdn.weatherapi.com/weather/64x64/day/122.png', code: 1009 },
        feelslikec: "29.8",
        gust_kph: "16.2",
        gust_mph: "10.1",
        humidity: "41",
        is_day: "0",

    }
]
    return weatherData.filter((item) => item.location==a);
    // if (weatherData.location === a) {
    //     return weatherData.condition;
    // }


}


// let a=prompt("Enter your location")
// const response = getWeatherData(a);
// console.log(response)

const res = process.argv[2]
console.log(getWeatherData(res));