import React from 'react';
import "../css/custom.css"; // Import your CSS file

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default FeatureCard;