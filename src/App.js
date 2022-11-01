import logo from "./logo.svg";
import "./App.css";
import WeatherApi from "./weatherApi/WeatherApi";

function App() {
  return (
    <div className="App">
      <WeatherApi />
    </div>
  );
}

export default App;
