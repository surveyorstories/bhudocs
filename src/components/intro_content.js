import React from "react";
import "../css/home.css"; // Import the CSS file

const WelcomeBlock = () => {
  const imageUrls = ["img/logo.svg"];

  return (
    <div className="homepage-container">
      {" "}
      {/* Use the class name */}
      <div className="left-column">
        {" "}
        {/* Use the class name */}
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="column-image"
          />
        ))}
      </div>
      <div className="right-column">
        {" "}
        {/* Use the class name */}
        <div>
          <h1>BHUKAMATHA</h1>
          <p>
            Plugin developed as part of the AP Resurvey 2020 project. This
            plugin simplifies the complex task of generating LPMs (Land Parcel
            Maps) by automating the process and providing Better and efficient
            results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlock;
