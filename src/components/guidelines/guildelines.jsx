import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
