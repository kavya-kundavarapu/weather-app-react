//main project..using MUI,bootstrap icons and open weather API..to show weather details of any city.
import { useState, useEffect } from "react";
import { WeatherDetailsPage } from "./weatherdetails";
import "./weather.css";

export function WeatherHomePage() {
  const [city, setCity] = useState("");
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("ww-dark") === "1";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ww-dark", dark ? "1" : "0");
    } catch (e) {}
  }, [dark]);

  return (
    <div className={`app-bg ${dark ? "dark-theme" : ""}`}>
      <div className="top-bar ">
        <h3>
          {" "}
          <i className="bi bi-cloud-sun me-2"></i> WeatherWise
        </h3>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search city..."
            className="search-box"
            onKeyUp={(e) => e.key === "Enter" && setCity(e.target.value)}
          />

          <button
            aria-label="Toggle dark theme"
            className="theme-toggle"
            onClick={() => setDark((s) => !s)}
          >
            {dark ? (
              <i className="bi bi-sun-fill"></i>
            ) : (
              <i className="bi bi-moon-fill"></i>
            )}
          </button>
        </div>
      </div>

      {city && <WeatherDetailsPage city={city} />}
    </div>
  );
}
