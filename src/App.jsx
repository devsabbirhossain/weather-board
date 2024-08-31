import "./App.css";
// import ClearSkyBG from "./assets/backgrounds/clear-sky.jpg";
// import FewCloudsBG from "./assets/backgrounds/few-clouds.jpg";
import MISTBG from "./assets/backgrounds/mist.jpeg";
// import RainBG from "./assets/backgrounds/rainy-day.jpg";
// import SnowBG from "./assets/backgrounds/snow.jpg";
// import SunnyBG from "./assets/backgrounds/sunny.jpg";
// import ThunderBG from "./assets/backgrounds/thunderstorm.jpg";

import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

import WeatherProvider from "./provider/WeatherProvider";

// import { useContext } from "react";
// import { WeatherContext } from "./context";

function App() {
  // const { weatherData } = useContext(WeatherContext);

  // const { location, climate, temperature, time } = weatherData;

  // function getWeatherBackground(climate) {
  //   switch (climate) {
  //     case "Rain":
  //       return RainBG;
  //     case "Clouds":
  //       return FewCloudsBG;
  //     case "Clear":
  //       return ClearSkyBG;
  //     case "Snow":
  //       return SnowBG;
  //     case "Thunder":
  //       return ThunderBG;
  //     case "Fog":
  //       return MISTBG;
  //     case "Haze":
  //       return MISTBG;
  //     case "Mist":
  //       return MISTBG;
  //     default:
  //       return SunnyBG;
  //   }
  // }
  return (
    <WeatherProvider>
      <div
        style={{ backgroundImage: `url('${MISTBG}')` }}
        className="grid place-items-center h-screen bg-no-repeat bg-cover">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
