import React from "react";
import "../styles/style.css";
import { StaticImage } from "gatsby-plugin-image";
import {
  Page,
  Seo,
  Section,
  InterestsSection,
  Animation,
} from "gatsby-theme-portfolio-minimal";

import Review from "../components/review";
import Pricing from "../components/pricing";
import Schedule from "../components/schedule";
import Staymotivated from "../components/staymotivated";
import Faq from "../components/faq";
import Features from "../components/features";

export default function IndexPage() {
  return (
    <>
      <Seo title="POS.AL" />
      <Page useSplashScreenAnimation>
        <Section>
          <div className="main">
            <div className="maintext">
              <h1 className="hero">
                Take the next step
                <span className="textspan"> toward professional </span>
              </h1>
            </div>
            <div className="mainbutton">
              <button className="button1">Free Trial</button>
            </div>
          </div>
        </Section>
        <Section id="screenshot">
          <Animation type="fadeUp">
            <StaticImage
              src="../images/60483f860e3e103bb76c5e87_webflow-seo-tips.jpg"
              alt="mainimage"
            />
          </Animation>
        </Section>
        <div className="interestheading">
          We collaborate with<span className="interestspan"> 200+ </span>
          leading universities and companies
        </div>

        <InterestsSection sectionId="details" />
        <Features usefadeUpAnimation />
        <Schedule />

        <Staymotivated />
        <Pricing />
        <Faq />
        <Review />
        <Animation type="fadeUp">
          <div className="mainfooter">
            <div className="start2">
              <h2 className="startlearning">Start learning with Descriptive</h2>
              <div className="paragraph">
                <p className="p1">
                  Over 4,000 courses in topics like business analytics, graphic
                  design, Python, and more.
                </p>
              </div>
              <div className="main-button2">
                <button className="button2">Free Trial</button>
              </div>
            </div>
          </div>
        </Animation>
      </Page>
    </>
  );
}
