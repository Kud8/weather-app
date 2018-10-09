const moscowId = 2122265;
const locale = "en-gb";

const response = {"consolidated_weather":[{"id":4526432524959744,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"WSW","created":"2018-10-09T21:07:47.186942Z","applicable_date":"2018-10-10","min_temp":4.26,"max_temp":12.6375,"the_temp":11.274999999999999,"wind_speed":7.732490559705321,"wind_direction":250.62475875077072,"air_pressure":1018.04,"humidity":67,"visibility":14.922850552771813,"predictability":71},{"id":5078789344198656,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"NNW","created":"2018-10-09T21:07:49.988099Z","applicable_date":"2018-10-11","min_temp":4.4225,"max_temp":12.675,"the_temp":12.45,"wind_speed":5.9509428885866535,"wind_direction":337.3749791740655,"air_pressure":1025.745,"humidity":67,"visibility":14.758187186828918,"predictability":70},{"id":5397092222631936,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"WNW","created":"2018-10-09T21:07:52.785149Z","applicable_date":"2018-10-12","min_temp":2.9825,"max_temp":13.8125,"the_temp":12.475,"wind_speed":5.372728466497653,"wind_direction":283.00830141966844,"air_pressure":1032.22,"humidity":71,"visibility":12.784712280283145,"predictability":70},{"id":5593569595228160,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"W","created":"2018-10-09T21:07:56.362018Z","applicable_date":"2018-10-13","min_temp":6.365,"max_temp":13.605,"the_temp":11.2,"wind_speed":5.896729777334367,"wind_direction":274.24374600660224,"air_pressure":1028.31,"humidity":77,"visibility":11.427016225244572,"predictability":70},{"id":5073142972153856,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"NW","created":"2018-10-09T21:07:58.770292Z","applicable_date":"2018-10-14","min_temp":8.3275,"max_temp":13.485,"the_temp":11.39,"wind_speed":6.792552957395476,"wind_direction":316.9720092763296,"air_pressure":1008.61,"humidity":80,"visibility":9.997862483098704,"predictability":73},{"id":4797314367488000,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"NNW","created":"2018-10-09T21:08:01.662311Z","applicable_date":"2018-10-15","min_temp":4.665,"max_temp":13.3675,"the_temp":7.38,"wind_speed":5.250244969378827,"wind_direction":339.51986762214017,"air_pressure":1020.91,"humidity":79,"visibility":9.997862483098704,"predictability":71}],"time":"2018-10-10T01:28:55.604853+03:00","sun_rise":"2018-10-10T06:49:45.066794+03:00","sun_set":"2018-10-10T17:42:22.289762+03:00","timezone_name":"LMT","parent":{"title":"Russia","location_type":"Country","woeid":23424936,"latt_long":"59.453751,108.830719"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":180},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360},{"title":"Yahoo","slug":"yahoo","url":"http://weather.yahoo.com/","crawl_rate":180}],"title":"Moscow","location_type":"City","woeid":2122265,"latt_long":"55.756950,37.614971","timezone":"Europe/Moscow"}

const getSign = (temperature) => {
    switch (Math.sign(temperature)) {
        case 1:
            return '+';
        case -1:
            return '-';
        default:
            return '';
    }
}

const mapWeather = (data) => {
    return data.consolidated_weather.map((item) => {
        const maxTemperature = Math.round(item.max_temp);
        const signMaxTemperature = getSign(maxTemperature)
        
        const minTemperature = Math.round(item.min_temp);
        const signMinTemperature = getSign(minTemperature)
        
        const date = new Date(item.applicable_date)

        return {
            day: date.toLocaleString(locale, { day: "numeric", month: "short" }),
            weekday: date.toLocaleString(locale, { weekday: "long" }),
            maxTemperature: `${signMaxTemperature}${maxTemperature}`,
            minTemperature: `${signMinTemperature}${minTemperature}`,
            icon: `https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`,
            color: getWeatherColor(item.weather_state_abbr),
        }
    })
}

export const getWeather = () => {
    let headers = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'multipart/form-data'
    });

    return fetch(`https://www.metaweather.com/api/location/${moscowId}/`, { headers })
        .then((response) => {
            console.log('response: ', response);
            return response.json()
        })
        .then(mapWeather)
        .catch(() => mapWeather(response))
}

export const getWeatherColor = (weather) => {
    switch (weather) {
        case "sn":
            return "#66CCCC";
        case "sl":
            return "#EEF6F9";
        case "h":
            return "#336666";
        case "t":
            return "#669999";
        case "hr":
            return "#EAEAEA";
        case "lr":
            return "#6699CC";
        case "s":
            return "#99CCFF";
        case "hc":
            return "#99CCCC";
        case "lc":
            return "#FFF8DE";
        default:
        case "c":
            return "#F7FCFF";
    }
}