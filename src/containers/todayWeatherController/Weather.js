import React, { Component } from 'react';
import request from 'axios';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { Loading1 } from "../../components/Loading";
import { Alert } from "../../components/Alert";
import './WeatherStyle.css';
import icons from '../../asserts/icons.png';

const API_KEY = '4e0d135756f3f24a7b654806073a0efe';

class Weather extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      city: '',
      country: '',
      data: {},
      error: {}
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch() {
    const { city, country } = this.state;
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;
    this.setState({
      loading: true,
      error: {},
    });
    request
      .get(query)
      .then(res => res.data)
      .then(data => {
        this.setState({
          data,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({
          error: error.response.data,
          loading: false,
          data: {},
        })
      });
  }
  renderWeather(data) {
    if (data.weather && data.main) {
      let icon = 'other';
      const w = data.weather[0].main.toLowerCase();
      if (w.indexOf('cloud') >= 0) {
        icon = 'cloud';
      } else if(w.indexOf('rain') >=0) {
        icon = 'rain';
      } else if(w.indexOf('clear') >=0) {
        icon = 'clear';
      }
      return (
        <div>
          <div>
            <div className={`weather-icon ${icon}`} style={{ backgroundImage: `url(${icons}` }}></div>
            <div className="clearfix">
              <h1>{ data.weather[0].main }</h1>
              <p>{data.weather[0].description}</p>
            </div>
            <div>
              <p>Temperature: {data.main.temp_min} ~{data.main.temp_max} </p>
              <p>Humidity: {data.main.humidity}% </p>
            </div>
          </div>
        </div>
      )
    }
    return null;
  }
  render() {
    const { city, country, loading, data, error } = this.state;

    return (
      <div className="page-weather">
        <div className="heading">Today’s Weather</div>
        <div>
          {error.cod && <Alert title={error.message} /> }
          <div className="form">
            <Input label="City" value={city} onChange={e => this.setState({ city: e.target.value })}/>
            <Input label="Country" value={country} onChange={e => this.setState({ country: e.target.value })} />
            <Button title="Search" onClick={this.onSearch} />
          </div>
          <div className="clearfix">
            { loading ? <Loading1 /> : this.renderWeather(data)}
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
