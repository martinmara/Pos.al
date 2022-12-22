import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../components/pricing.css";
import { Animation } from "gatsby-theme-portfolio-minimal";

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { header: { regex: "" } } }) {
        nodes {
          frontmatter {
            title
            id
            header
            whats_included
            list
            pricing
          }
          id
        }
      }
    }
  `);
  return (
    <Animation type="fadeUp">
      <div className="main" id="pricing">
        <div className="title">
          <h1 className="heading">
            {data.allMarkdownRemark.nodes[0].frontmatter.title}
          </h1>
        </div>
        {data.allMarkdownRemark.nodes.map((item) => {
          return (
            <div class="wrapper-card">
              <div className="wrappercard2">
                <div class="card" id={item.frontmatter.id}>
                  <div class="card-title">
                    <h3>{item.frontmatter.header}</h3>
                  </div>
                  <div class="card-price">
                    <h1>{item.frontmatter.pricing}</h1>
                  </div>
                  <div class="card-description">{item.frontmatter.list}</div>
                  <div class="card-action">
                    <button type="button">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Animation>
  );
};

export default Pricing;
