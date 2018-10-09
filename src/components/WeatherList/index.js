import React from 'react';  
import PropTypes from 'prop-types';
import WeatherListItem from '../WeatherListItem';
import './index.scss';

const WeatherList = (props) => {
    return(
        <ul className='weather-list'>  
            {
                props.items.map((item) =>
                    <WeatherListItem key={item.day} {...item} onClick={console.log} />
                )
            }
        </ul>
    )
}

WeatherList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.string,
        weekday: PropTypes.string,
        maxTemperature: PropTypes.string,
        minTemperature: PropTypes.string,
        icon: PropTypes.string,
        color: PropTypes.string,
    }))
};

export default WeatherList;