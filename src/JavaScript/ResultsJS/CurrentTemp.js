import React from "react";

import "/src/Stylesheets/CurrentTemp.css";

export default function CurrentTemp({ value }) {
  return (
    <div className="CurrentTemp">
      <span className="val">{value}</span>
    </div>
  );
}
