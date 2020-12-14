import * as axios from "axios";

const API_KEY = "4fb666bdc486e97934713fb03fe49c3e";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const getWeatherData = (city) =>
  instance
    .get(`weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`)
    .then((res) => res.data);

export const getFiveDaysWeatherData = (lon, lat) =>
  instance
    .get(`onecall?lat=${lat}&lon=${lon}2&exclude=current,minutely,hourly,alerts&lang=ru&units=metric&appid=${API_KEY}`)
    .then((res) => res.data);