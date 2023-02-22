import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

// export const WeatherIcons = {
//   "01d": "/react-weather-app/icons/sunny.svg",
//   "01n": "/react-weather-app/icons/night.svg",
//   "02d": "/react-weather-app/icons/day.svg",
//   "02n": "/react-weather-app/icons/cloudy-night.svg",
//   "03d": "/react-weather-app/icons/cloudy.svg",
//   "03n": "/react-weather-app/icons/cloudy.svg",
//   "04d": "/react-weather-app/icons/perfect-day.svg",
//   "04n": "/react-weather-app/icons/cloudy-night.svg",
//   "09d": "/react-weather-app/icons/rain.svg",
//   "09n": "/react-weather-app/icons/rain-night.svg",
//   "10d": "/react-weather-app/icons/rain.svg",
//   "10n": "/react-weather-app/icons/rain-night.svg",
//   "11d": "/react-weather-app/icons/storm.svg",
//   "11n": "/react-weather-app/icons/storm.svg",
// };

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 14px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 75px;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82736524bda615f358b15f9c9e2beb9b`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel> 
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
