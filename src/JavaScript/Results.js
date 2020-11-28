import React from "react";
import City from "./ResultsJS/City";
import DayTime from "./ResultsJS/DayTime";
import CurrentTemp from "./ResultsJS/CurrentTemp";
import Description from "./ResultsJS/Description";
import WeatherIcon from "./ResultsJS/WeatherIcon";
import Humidity from "./ResultsJS/Humidity";
import Wind from "./ResultsJS/Wind";

import "/src/Stylesheets/Results.css";

export default function Results() {
  function fahTemp(event) {
    event.preventDefault();
    let temp = (CurrentTemp.value * 9) / 5 + 32;
    alert(`Fah temp is ${Math.round(temp)} °F`);
  }
  return (
    <div className="results">
      <City value="London" />
      <DayTime day="Sunday" time="11:34" />
      <Description value="Cloudy" />

      <div className="flex">
        <WeatherIcon />
        <CurrentTemp value={3} />
        <span className="units">
          <a href="/">°C</a> |{" "}
          <a href="/" onClick={fahTemp}>
            °F
          </a>
        </span>
        <ul>
          <li>
            <Humidity value={80} />
          </li>
          <li>
            <Wind value={3} />
          </li>
        </ul>
      </div>
    </div>
  );
}
