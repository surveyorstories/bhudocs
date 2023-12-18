import React from "react";
import DownloadButton from "./DownloadButton";
import DocumentationButton from "./DocumentationButton";
import "../css/home.css"; // Import the CSS file

const WelcomeBlock = () => {
  const imageUrls = ["img/logo.svg"];

  return (
    <div className="welcomeblock-container" id="welcomeblock">
      <div className="left-column" id="left-column">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="column-image"
          />
        ))}
      </div>
      <div className="right-column" id="right-column">
        <div>
          <h1>BHUKAMATHA</h1>
          <p>
            Plugin developed as part of the AP Resurvey 2020 project. This
            plugin simplifies the complex task of generating LPMs (Land Parcel
            Maps) by automating the process and providing Better and efficient
            results.
          </p>
          {/* Buttons below the paragraph */}
          <div className="buttons-container">
            <DownloadButton />
            <DocumentationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlock;
