import "./App.css";
import Home from "./Home";
import FavouriteProvider from "./provider/FavouriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <Home />
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
