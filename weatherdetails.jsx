//main project weather app details page

import axios from "axios";
import { useEffect, useState } from "react";

export function WeatherDetailsPage({ city }) {
  const [weatherObj, setWeatherObj] = useState({
    name: "",
    weather: [{ description: "" }],
    main: { temp: 0, feels_like: 0, humidity: 0, pressure: 0 },
    wind: { speed: 0, deg: 0 },
    sys: { sunrise: 0, sunset: 0, country: "" },
    visibility: 0,
    coord: { lat: 0, lon: 0 },
    clouds: { all: 0 },
  });
  const [showFull, setShowFull] = useState(false);

  const windSpeedKmph = (weatherObj.wind.speed * 3.6).toFixed(1);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f20af8746569ccbdbad086ffa83faaad&units=metric`,
      )
      .then((res) => setWeatherObj(res.data));
  }, [city]);

  return (
    <div className="weather-dashboard container mt-4">
      <div className="row g-4">
        {/* LEFT MAIN CARD */}
        <div className="col-md-4">
          <div className="main-weather-card">
            <h4>{weatherObj.name}</h4>
            <p className="text-muted">{weatherObj.weather[0].description}</p>

            <h1 className="temp">{Math.round(weatherObj.main.temp)}&deg;c</h1>

            <button
              className="btn btn-primary w-100 mt-3"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "Hide Full Forecast" : "View Full Forecast"}
            </button>
          </div>
        </div>

        {/* RIGHT INFO CARDS */}
        <div className="col-md-8">
          <h5 className="mb-3">Current Weather Details</h5>

          <div className="row g-3">
            <div className="col-md-4">
              <div className="info-card">
                <span>
                  <i className="fa-solid fa-droplet me-2"></i> Humidity
                </span>

                <h4>{weatherObj.main.humidity}%</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <span>
                  <i className="fa-solid fa-temperature-half me-2"></i> Feels
                  Like
                </span>
                <h4>{weatherObj.main.feels_like}°C</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <span>
                  <i className="fa-solid fa-gauge me-2"></i> Pressure
                </span>
                <h4>{weatherObj.main.pressure} hPa</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <span>
                  <i className="fa-solid fa-wind me-2"></i> Wind Speed
                </span>
                <h4>{windSpeedKmph} km/h</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <span>
                  <i className="fa-solid fa-eye me-2"></i> Visibility
                </span>
                <h4>{(weatherObj.visibility / 1000).toFixed(1)} km</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map / Radar section */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="map-section">
            {weatherObj.coord &&
            weatherObj.coord.lat &&
            weatherObj.coord.lon ? (
              <iframe
                title="map"
                className="map-placeholder"
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  weatherObj.coord.lon - 0.05
                },${weatherObj.coord.lat - 0.03},${weatherObj.coord.lon + 0.05},${
                  weatherObj.coord.lat + 0.03
                }&layer=mapnik&marker=${weatherObj.coord.lat},${weatherObj.coord.lon}`}
                style={{ border: 0 }}
              />
            ) : (
              <div className="map-placeholder">Map will appear here</div>
            )}
          </div>
        </div>
      </div>

      {showFull && (
        <div className="row mt-4">
          <div className="col-12">
            <h5 className="mb-3 text-center">Full Forecast Details</h5>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="info-card">
                  <i className="fa-solid fa-sun me-2"></i> Sunrise
                  <h4>
                    {new Date(
                      weatherObj.sys.sunrise * 1000,
                    ).toLocaleTimeString()}
                  </h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-card">
                  <i className="fa-solid fa-cloud-sun me-2"></i> Sunset
                  <h4>
                    {new Date(
                      weatherObj.sys.sunset * 1000,
                    ).toLocaleTimeString()}
                  </h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-card">
                  <i className="fa-solid fa-location-dot me-2"></i> Country
                  <h4>{weatherObj.sys.country}</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-card">
                  <i className="fa-solid fa-compass me-2"></i> Wind Direction
                  <h4>{weatherObj.wind.deg}°</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-card">
                  <i className="fa-solid fa-cloud me-2"></i> Cloudiness
                  <h4>{weatherObj.clouds.all}%</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
