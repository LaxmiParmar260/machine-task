import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const InvoiceProgress = () => {
  const value = 100;
  const totalAmount = "₹175k";
  const percentageChange = "+10%";

  return (
    <div style={{ width: "160px", margin: "auto" }}>
      <CircularProgressbar
        value={value}
        text={`${totalAmount}`}
        styles={buildStyles({
          textSize: "16px",
          pathColor:
            "linear-gradient(to right, #6a11cb, #2575fc, #42e695, #ff6a00)",
          textColor: "#333",
          trailColor: "#ddd",
        })}
      ></CircularProgressbar>
      <div className="text-center">
        <p className="text-green-700">Total Invoice Amount</p>
        <p className="text-green-600">{percentageChange}</p>
      </div>
    </div>
  );
};

export default InvoiceProgress;
