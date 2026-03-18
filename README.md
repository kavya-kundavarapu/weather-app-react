#  WeatherWise - React Weather App

A modern and responsive weather application built using **React**, **Bootstrap**, and **OpenWeather API**.
It allows users to search for any city and view detailed real-time weather information with a clean UI and dark mode support.

---

## Live Demo
https://weatherforecastapilive.netlify.app/

---

## Features

* 🔍 Search weather by city name
* 🌡️ Displays temperature, humidity, pressure, and more
* 🌬️ Wind speed & direction
* 🌅 Sunrise & 🌇 Sunset timings
* 🗺️ Interactive map using OpenStreetMap
* 🌙 Dark / Light mode toggle


---

## 🛠️ Tech Stack

* ⚛️ React (Functional Components + Hooks)
* 🎨 CSS (Custom styling + Responsive design)
* 🧰 Bootstrap & Bootstrap Icons
* 🌐 Axios (API calls)
* ☁️ OpenWeather API

---

## 📂 Project Structure

```
weather-app-react/
│
├── src/
│   ├── components/
│   │   ├── WeatherHomePage.js
│   │   └── WeatherDetailsPage.js
│   ├── weather.css
│   └── index.js
│
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/kavya-kundavarapu/weather-app-react.git
```

2. Navigate to the project folder:

```bash
cd weather-app-react
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

---
## 🔑 API Configuration

This project uses OpenWeather API.

1. Create a free API key from OpenWeather
2. Create a `.env` file in the root directory
3. Add:

REACT_APP_WEATHER_API_KEY=your_api_key_here

## 🖥️ Build for Production

```bash
npm run build
```

---

## 🚀 Deployment

This project is deployed using **Netlify**.

### Steps:

* Push code to GitHub
* Connect repository to Netlify
* Set:

  * Build Command: `npm run build`
  * Publish Directory: `build`

---
🚀 Deployment

This project is deployed using Netlify.

🔹 Method 1: Manual Deployment (Current)

Run build command:

npm run build

A build folder will be created

Go to Netlify

Drag & drop the build folder into Netlify

👉 Your app will be live instantly
## 📸 Screenshots

<img width="1919" height="1024" alt="image" src="https://github.com/user-attachments/assets/4f60d257-5dbf-4be7-8620-0e50fe7e956f" />

<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/2237cf8e-6d16-4d6e-9a65-0f4a91a4d6ac" />

      
---

## 💡 Future Improvements

* 📅 7-day weather forecast
* 📍 Auto-detect current location
* 🌐 Multi-language support
* 📊 Weather charts & graphs

---

## 🙋‍♀️ Author

**Kavya Kundavarapu**

* GitHub: https://github.com/kavya-kundavarapu
* Portfolio: https://kavyaportfoliomine.netlify.app/

---

## ⭐ Acknowledgements

* OpenWeather API
* Bootstrap
* OpenStreetMap

---

## 📄 License

This project is licensed under the ISC License.
---
