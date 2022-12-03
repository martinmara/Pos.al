import React from "react";
import "../gatsby-theme-portfolio-minimal/globalStyles/style.css";
import { StaticImage } from "gatsby-plugin-image";
import { Page, Section, Seo } from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page>
        <Section>
          <div className="main">
            <div className="maintext">
              <h1 className="hero">
                Take the next step
                <br></br>
                <br></br>
                <span className="textspan"> toward professional </span>
              </h1>
            </div>
            <div className="mainbutton">
              <button className="button1">Free Trial</button>
            </div>
          </div>
        </Section>
        <Section id="screenshot">
          <StaticImage src="C:\Users\User\Desktop\gatsby-starter-portfolio-minimal-theme-main\src\images\60483f860e3e103bb76c5e87_webflow-seo-tips.jpg" />
        </Section>

        <div className="mainfooter">
          <div>
            <h1 className="startlearning">
              Start learning with<br></br>
              Descriptive
            </h1>
          </div>
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
      </Page>
    </>
  );
}
