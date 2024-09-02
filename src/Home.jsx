import ClearSkyBG from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsBG from "./assets/backgrounds/few-clouds.jpg";
import MISTBG from "./assets/backgrounds/mist.jpeg";
import RainBG from "./assets/backgrounds/shower-rain.jpg";
import SnowBG from "./assets/backgrounds/snow.jpg";
import SunnyBG from "./assets/backgrounds/sunny.jpg";
import ThunderBG from "./assets/backgrounds/thunderstorm.jpg";

import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context";

function Home() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [bgImage, setBGImage] = useState("");
  function getWeatherBackground(climate) {
    switch (climate) {
      case "Rain":
        return RainBG;
      case "Clouds":
        return FewCloudsBG;
      case "Clear":
        return ClearSkyBG;
      case "Snow":
        return SnowBG;
      case "Thunder":
        return ThunderBG;
      case "Fog":
        return MISTBG;
      case "Haze":
        return MISTBG;
      case "Mist":
        return MISTBG;
      default:
        return SunnyBG;
    }
  }

  useEffect(() => {
    const bgImage = getWeatherBackground(weatherData.climate);
    setBGImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div
          style={{ backgroundImage: `url('${bgImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
            <p className="text-center text-3xl text-black">{loading.message}</p>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${bgImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default Home;
