import React from 'react';
import WeatherList from '../../components/WeatherList';
import { getWeather } from '../../services/weatherService';
import FontAwesome from 'react-fontawesome';
import './index.scss';

export default class WeatherListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        getWeather().then((response) => {
            this.setState({
                items: response
            })
        })
    }

    render() {
        const { items } = this.state;
        return items.length
            ? <WeatherList items={items} />
            : (
                <div className="loading">
                    <FontAwesome name="spinner" spin />
                </div>
            )
    }
}
  