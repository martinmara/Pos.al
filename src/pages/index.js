import React from "react";
import "../gatsby-theme-portfolio-minimal/globalStyles/style.css";
import { StaticImage } from "gatsby-plugin-image"
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Section,
  Seo,
} from "gatsby-theme-portfolio-minimal";

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
                <br></br>
              </h1>
            </div>
            <div className="mainbutton">
              <button className="button1">Free Trial</button>
            </div>
          </div>
        </Section>
       <Section>
          <StaticImage src="C:\Users\User\Desktop\gatsby-starter-portfolio-minimal-theme-main\src\images\60483f860e3e103bb76c5e87_webflow-seo-tips.jpg"/>
        </Section>
       {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
  />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="We collaborate with 200+ leading universities and companies" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />*/}
      </Page>
    </>
  );
}
