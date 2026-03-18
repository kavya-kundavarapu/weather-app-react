//f20af8746569ccbdbad086ffa83faaad this is my open weather API key..you can get your own API key from https://home.openweathermap.org/api_keys by creating an account and then use that API key in the code below to get weather details of any city.

//https://home.openweathermap.org/api_keys website of me to get API key for open weather API
import axios from "axios";

const API_KEY = "f20af8746569ccbdbad086ffa83faaad";

export async function getWeather(city) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  return res.data;
}
//this page is only to know my api key and website to get API key for open weather API..you can get your own API key from https://home.openweathermap.org/api_keys by creating an account and then use that API key in the code above to get weather details of any city.
