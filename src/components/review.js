import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./review.css";
import { Animation } from "gatsby-theme-portfolio-minimal";

const Review = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { description: { ne: "" }, stars: { regex: "" } }
        }
      ) {
        nodes {
          frontmatter {
            stars
            description
            name
          }
        }
      }
    }
  `);

  return (
    <Animation type="scaleIn">
      <div>
        <main>
          <div className="portfolio" id="reviews">
            <h2 className="header">What our users say</h2>
            <p className="paragraph">
              800+ hundred people are already learning on Descriptive.
            </p>
            {data.allMarkdownRemark.nodes.map((item) => {
              return (
                <div className="row">
                  <div className="column">
                    <div className="card2">
                      <div className="star-wrapper">
                        <span className="star">{item.frontmatter.stars}</span>
                      </div>
                      <div className="review-text">
                        {item.frontmatter.description}
                      </div>
                      <div className="profilewrapper">
                        <StaticImage
                          className="profile"
                          src="../images/download (3).jpg"
                          alt="hello"
                        />

                        <h2 className="name">{item.frontmatter.name}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </Animation>
  );
};

export default Review;
