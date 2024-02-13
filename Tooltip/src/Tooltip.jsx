// Tooltip.js
import React, { useState } from "react";
import "./App.css";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container">
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      {isVisible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
