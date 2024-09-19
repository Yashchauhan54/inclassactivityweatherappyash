
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import { Form, Button } from 'react-bootstrap';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Toronto');
  const [query, setQuery] = useState('');

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`,
        {
          headers: {
            'x-rapidapi-key': '87e6f55e85mshc1c271dc18bc112p1fa395jsnb32344b5eb59',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
          }
        }
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(query);
    setQuery('');
  };

  if (!weatherData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const { location: loc, current } = weatherData;

  return (
    <div className="container mt-5 weather-container">
      <Form onSubmit={handleSearch} className="mb-4 search-bar">
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <div className="card weather-card">
        <div className="card-body">
          <h1 className="card-title">
            {loc.name}, {loc.country}
          </h1>
          <h5 className="card-subtitle mb-2 ">
            {loc.localtime}
          </h5>
          <div className="weather-item weather-temp">
            <i className="bi bi-thermometer" style={{ color: 'red' }}></i>
            <p>Temperature: {current.temp_c}°C / {current.temp_f}°F</p>
          </div>
          <div className="weather-info">
            <div className="weather-item">
              <i className="bi bi-cloud" style={{ color: 'lightgreen' }}></i>
              <p>Condition: {current.condition.text}</p>
            </div>
            <div className="weather-item">
              <i className="bi bi-wind" style={{ color: 'orange' }}></i>
              <p>Wind: {current.wind_mph} mph / {current.wind_kph} kph</p>
            </div>
            <div className="weather-item">
              <i className="bi bi-droplet" style={{ color: 'skyblue' }}></i>
              <p>Humidity: {current.humidity}%</p>
            </div>
            <div className="weather-item">
              <i className="bi bi-cloud" style={{ color: 'pink' }}></i>
              <p>Pressure: {current.pressure_mb} mb / {current.pressure_in} in</p>
            </div>
            <div className="weather-item">
              <i className="bi bi-umbrella" style={{ color: 'skyblue' }}></i>
              <p>Precipitation: {current.precip_mm} mm / {current.precip_in} in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
