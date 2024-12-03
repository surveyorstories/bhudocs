import React from "react";
import DownloadButton from "./DownloadButton";
import DynamicDownloadButton from "./DynamicDownloadButton";
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
          This plugin is crafted to significantly enhance your productivity in the AP Resurvey Project by automating the creation of various maps, including Land Parcel Maps, Village Maps, and Stone Maps, ensuring a faster, more efficient, and precise mapping process.
          </p>
          {/* Buttons below the paragraph */}
          <div className="buttons-container">
            <DynamicDownloadButton />
            <DocumentationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlock;
