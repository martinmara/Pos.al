import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "../components/features.css";
import { Animation } from "gatsby-theme-portfolio-minimal";

export default function Features() {
  return (
    <main>
      <Animation type="fadeIn">
        <div className="main2">
          <div>
            <StaticImage
              alt="1"
              className="img"
              src="../images/Descriptive - Google Chrome 12_18_2022 8_49_14 PM (2).png"
            />
          </div>
          <div className="title1">
            <h1 className="feature1title">
              Find the right course for you to replenish knowledge and goals
            </h1>
            <p className="motivatedparagraph">
              Browse our study areas to see what's on offer at Despriptive and
              learn more about the different degrees on offer, the student
              experience and application information for specific courses.
            </p>
          </div>
        </div>
      </Animation>
      <Animation type="fadeIn">
        <div className="container">
          <div>
            <h1 className="text">Learn on the go with our app</h1>
            <p className="study">
              Browse our study areas to see what's on offer at Despriptive and
              learn more about the different degrees on offer, the student
              experience and application information for specific courses.
            </p>
          </div>
          <div className="image">
            <StaticImage
              src="../images/Descriptive - Google Chrome 12_7_2022 1_18_33 AM (2).png"
              alt="img"
              className="img"
            />
          </div>
        </div>
      </Animation>
    </main>
  );
}
