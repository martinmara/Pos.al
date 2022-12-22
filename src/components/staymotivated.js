import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "../components/staymotivated.css";
import { Animation } from "gatsby-theme-portfolio-minimal";

export default function Staymotivated() {
  return (
    <Animation type="fadeIn">
      <div className="main2">
        <div>
          <StaticImage
            alt="1"
            className="img"
            src="../images/Descriptive - Google Chrome 12_15_2022 10_39_09 AM (2).png"
          />
        </div>
        <div className="text">
          <h2 className="h3text">Receive round-the-clock support</h2>
          <p className="motivatedparagraph">
            Online chat to communicate with the teacher and classmates to
            achieve the best result. Share problems and look for solutions with
            other students. Using chat will help every student to have an
            incredible teamwork experience.
          </p>
        </div>
      </div>
    </Animation>
  );
}
