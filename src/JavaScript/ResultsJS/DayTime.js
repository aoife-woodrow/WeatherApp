import React from "react";

export default function DayTime({ day, time }) {
  return (
    <div className="DayTime">
      <h4>
        {day} {time}
      </h4>
    </div>
  );
}
