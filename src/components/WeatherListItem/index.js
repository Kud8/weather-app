import React from 'react';  
import PropTypes from 'prop-types';
import './index.scss';

const WeatherListItem = (props) => {
    return(
        <li className="weather-list-item" style={{ backgroundColor: props.color }} onClick={() => console.log(props)}>
            <div className="weather-list-item__name">
                <span className="weather-list-item__name__weekday">{props.weekday}</span>
                <span className="weather-list-item__name__day">{props.day}</span>
            </div>
            <div className="weather-list-item__temperature">
                <span className="weather-list-item__temperature__max">{props.maxTemperature}</span>
                <span className="weather-list-item__temperature__delimiter"> / </span>
                <span className="weather-list-item__temperature__min">{props.minTemperature}</span>
            </div>
            <div className="weather-list-item__icon">
                <img className="weather-list-item__icon__image" src={props.icon} alt='weather icon' align="right" />
            </div>
        </li>
    )
}

WeatherListItem.propTypes = {
    day: PropTypes.string,
    weekday: PropTypes.string,
    maxTemperature: PropTypes.string,
    minTemperature: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
};

export default WeatherListItem;