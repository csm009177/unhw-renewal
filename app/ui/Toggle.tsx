"use client";

import { useContext, useEffect, useState } from "react";
import "../globals.css";

export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="Main-LeftVar"
      style={{
        width: isOpen ? "20%" : "2%",
        display: "flex",
        height: "100%",
        backgroundColor: "#434343",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#434343",
          width: "100%",
          height: "100%",
        }}
      >
        {/* <AddItemList isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        <button
          onClick={handleToggle}
          style={{ backgroundColor: "#434343", fontSize: "2vw" }}
        >
          {isOpen ? "◀" : "▶"}
        </button>
      </div>
    </div>
  );
}
