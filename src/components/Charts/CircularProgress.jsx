import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const percentage = 75.55; 

  return (
    <div style={{ width: "120px", margin: "0 auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage.toFixed(2)}%`}
        styles={buildStyles({
          textColor: "#000",
          pathColor: "red",
          trailColor: "#d6d6d6",
          textSize: "16px",
        })}
      />
    </div>
  );
};

export default CircularProgress;
