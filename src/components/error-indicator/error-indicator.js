import React from "react";
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div>
        <i class="fas fa-exclamation-triangle icon" />
      </div>
      <span className="error-title">ReStore Error</span>
      <span className="error-text">
        This service with a certain probability returns an error. Please reload
        this page.
      </span>
    </div>
  );
};

export default ErrorIndicator;
