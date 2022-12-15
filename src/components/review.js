import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./review.css";

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
          }
        }
      }
    }
  `);

  return (
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
                    <div className="star-wrapper">{item.frontmatter.stars}</div>
                    <div className="review-text">
                      {item.frontmatter.description}
                    </div>
                    <div className="photo-wrapper">
                      <StaticImage
                        className="profile"
                        src="../images/download (3).jpg"
                        alt="hello"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Review;
