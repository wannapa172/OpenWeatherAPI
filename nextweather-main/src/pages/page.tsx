import Image from "next/image";
import styles from "./page.module.css";
//client side rendering -> fetch data from api backend + APIKEY -> OpenWeather api
//server side rendering -> fetch data from OpenWeather api backend
//Display data on page
//Icon
//https://openweathermap.org/img/wn/10d@2x.png
export default function Home() {
  const data = fetch("http://localhost:3000/api/weather");
  const apiKey = process.env.API_KEY;
  //add with body-parser
  return (
    <>
      <h1>Weather App</h1>
      <form>
        <input type="number" placeholder="Latitude" />
        <input type="number" placeholder="Longitude" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
