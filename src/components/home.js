import React from "react";

import "../css/home.css";

const HomePage = () => {
  return (
    <div>
      <home_container>
        <div class="home_container">
          <div class="row align-items-center">
            <div class="col-12 col-lg-5">
              <div class="image-wrapper">
                <img
                  src="img/logo.svg"
                  alt="Mobirise Website Builder"
                  class="animate__animated animate__delay-1s animate__fadeInUp"
                ></img>
              </div>
            </div>
            <div class="col-12 col-lg">
              <div class="text-wrapper">
                <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1 animate__animated animate__delay-1s animate__fadeInUp">
                  <strong>Bhukamatha</strong>
                </h1>
                <p class="mbr-text mbr-fonts-style display-7 animate__animated animate__delay-1s animate__fadeInUp">
                  Plugin developed as part of the AP Resurvey 2020 project. This
                  plugin simplifies the complex task of generating LPMs (Land
                  Parcel Maps) by automating the process and providing Better
                  and efficient results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </home_container>
    </div>
  );
};

export default HomePage;
