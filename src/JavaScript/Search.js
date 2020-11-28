import React from "react";

import "/src/Stylesheets/Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Search by City name"
            className="col align-self-center border border-secondary rounded"
          />
        </div>
        <div className="col-4">
          <input type="submit" value="Search" />
        </div>
      </div>
    </div>
  );
}
