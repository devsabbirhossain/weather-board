import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [searchLocation, setSearchLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <LocationContext.Provider value={{ searchLocation, setSearchLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
