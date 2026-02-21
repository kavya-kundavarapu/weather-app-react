//main project..
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
      <div className="top-bar">
        <h3>🌤 WeatherWise</h3>

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
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {city && <WeatherDetailsPage city={city} />}
    </div>
  );
}
