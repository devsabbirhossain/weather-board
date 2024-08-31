import CloudImage from "../../assets/cloud.svg";
import LocationIcon from "../../assets/pin.svg";

import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDataTime } from "../../utils/date-utils";

function WeatherHeading() {
  const { weatherData } = useContext(WeatherContext);

  const { location, climate, temperature, time } = weatherData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={CloudImage} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={LocationIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDataTime(time, "time", false)} -{" "}
        {getFormattedDataTime(time, "date", false)}
      </p>
    </div>
  );
}

export default WeatherHeading;
