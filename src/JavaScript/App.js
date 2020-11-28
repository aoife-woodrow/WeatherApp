import React from "react";
import Search from "/src/JavaScript/Search";
import Results from "/src/JavaScript/Results";
import Footer from "/src/JavaScript/Footer";

import "/src/Stylesheets/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-wrapper">
        <div className="weather">
          <form id="weather-form">
            <Search />
            <Results />
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
