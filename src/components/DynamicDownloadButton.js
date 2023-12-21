// File: DynamicDownloadButton.js
import React, { useEffect, useState } from "react";
import axios from "axios"; // You may need to install axios: npm install axios

const DynamicDownloadButton = () => {
  const [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    // Fetch the latest release asset download link from GitHub
    axios
      .get(
        "https://api.github.com/repos/surveyorstories/bhukamatha/releases/latest"
      )
      .then((response) => {
        const latestAsset = response.data.assets[0]; // Assuming the first asset is the one you want
        if (latestAsset) {
          setDownloadLink(latestAsset.browser_download_url);
        }
      })
      .catch((error) => {
        console.error("Error fetching download link:", error);
      });
  }, []);

  return (
    <>
      <button className="download-button" role="button">
        Download
        <div className="dropdown-content">
          {downloadLink ? (
            <a href={downloadLink} download>
              Latest Release
            </a>
          ) : (
            <p>Loading...</p>
          )}
          <a href="./404">Old Releases</a>
          {/* Add more versions as needed */}
        </div>
      </button>
    </>
  );
};

export default DynamicDownloadButton;
