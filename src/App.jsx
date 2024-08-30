import "./App.css";
import MistImage from "./assets/backgrounds/mist.jpeg";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${MistImage}')` }}
        className="grid place-items-center h-screen bg-no-repeat bg-cover">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
