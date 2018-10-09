const moscowId = 2122265;
const locale = "en-gb";

const response = {"consolidated_weather":[{"id":5340094114299904,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"SW","created":"2018-10-07T15:07:40.641519Z","applicable_date":"2018-10-07","min_temp":9.405,"max_temp":16.0725,"the_temp":16.080000000000002,"wind_speed":8.123014115366262,"wind_direction":218.90195257233992,"air_pressure":1008.9200000000001,"humidity":68,"visibility":14.944598544500119,"predictability":71},{"id":5885946339786752,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"NNW","created":"2018-10-07T15:07:43.717325Z","applicable_date":"2018-10-08","min_temp":1.42,"max_temp":12.5725,"the_temp":10.77,"wind_speed":7.006387167422254,"wind_direction":328.2463725017835,"air_pressure":1015.89,"humidity":69,"visibility":16.18392338741748,"predictability":73},{"id":6210504267661312,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"SSW","created":"2018-10-07T15:07:46.735296Z","applicable_date":"2018-10-09","min_temp":0.6775,"max_temp":9.7675,"the_temp":8.89,"wind_speed":3.3266630366917203,"wind_direction":212.48207027583322,"air_pressure":1024.62,"humidity":64,"visibility":17.70348663803388,"predictability":71},{"id":5533704436842496,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"WSW","created":"2018-10-07T15:07:49.716262Z","applicable_date":"2018-10-10","min_temp":3.98,"max_temp":14.205,"the_temp":12.59,"wind_speed":7.602551577403961,"wind_direction":245.12463715424371,"air_pressure":1021.0699999999999,"humidity":64,"visibility":17.778983237890717,"predictability":71},{"id":5074229330444288,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"NW","created":"2018-10-07T15:07:52.802915Z","applicable_date":"2018-10-11","min_temp":6.6775,"max_temp":13.7075,"the_temp":13.14,"wind_speed":6.134137542561442,"wind_direction":325.4072062294049,"air_pressure":1023.3,"humidity":71,"visibility":16.500822695458524,"predictability":71},{"id":6220844132990976,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"NW","created":"2018-10-07T15:07:55.747920Z","applicable_date":"2018-10-12","min_temp":4.005,"max_temp":12.3375,"the_temp":10.21,"wind_speed":5.832742384474668,"wind_direction":321.0287725055562,"air_pressure":1016.15,"humidity":76,"visibility":9.997862483098704,"predictability":71}],"time":"2018-10-07T18:38:28.415786+03:00","sun_rise":"2018-10-07T06:43:44.795135+03:00","sun_set":"2018-10-07T17:50:00.905923+03:00","timezone_name":"LMT","parent":{"title":"Russia","location_type":"Country","woeid":23424936,"latt_long":"59.453751,108.830719"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":180},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360},{"title":"Yahoo","slug":"yahoo","url":"http://weather.yahoo.com/","crawl_rate":180}],"title":"Moscow","location_type":"City","woeid":2122265,"latt_long":"55.756950,37.614971","timezone":"Europe/Moscow"}

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
    // return fetch(`https://www.metaweather.com/api/location/${moscowId}`)
    //     .then((response) => response.json());
    return mapWeather(response);
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