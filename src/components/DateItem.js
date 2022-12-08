import React from "react";
import "./DateItem.css";

function DataItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date">
      <div className="date_month">{month}</div>
      <div className="date_day">{day}</div>
      <div className="date_year">{year}</div>
    </div>
  );
}

export default DataItem;
