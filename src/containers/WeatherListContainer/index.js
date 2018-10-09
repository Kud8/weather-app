import React from 'react';
import WeatherList from '../../components/WeatherList'
import { getWeather } from '../../services/weatherService'

export default class WeatherListContainer extends Component {
    state = {
        items: []
    }
    
    componentDidMount() {
        this.setState({
            items: getWeather()
        })
    }

    render() {
        const { items } = this.state;
        return items === [] ? (
            <div className="loading">
              <FontAwesome icon="spinner" spin />
            </div>
          ) : (
            <WeatherList items={items} />
          )
         
    }
}
  
export default WeatherListContainer;