import React, { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className={styles.main}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="number"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {weatherData && (
        <div>
          <h2>Weather Information</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p>City: {weatherData.name}</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
