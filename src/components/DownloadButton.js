import React from "react";

const DownloadButton = () => {
  return (
    <button className="download-button" role="button">
      Download
      <div className="dropdown-content">
        <a href="/docs/">Latest Release</a>
        <a href="#">Old Releases</a>
        {/* Add more versions as needed */}
      </div>
    </button>
  );
};

export default DownloadButton;
