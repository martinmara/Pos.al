import * as React from "react";
import "./faq.css";
import { useStaticQuery, graphql } from "gatsby";
import { useState } from "react";
import { Animation } from "gatsby-theme-portfolio-minimal";

const Faq = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { answer: { regex: "" } } }) {
        nodes {
          frontmatter {
            question
            answer
          }
          id
        }
      }
    }
  `);

  const [isShown, setIsShown] = useState(false);

  const handleClick = (idElement) => {
    setIsShown((idElement) => !idElement);
  };
  return (
    <main className="faq-section">
      <Animation type="scaleIn">
        <div className="faq-heading">
          <h1 className="fr-title">Frequently asked questions</h1>
        </div>
      </Animation>
      {data.allMarkdownRemark.nodes.map((item, index) => {
        return (
          <Animation type="scaleIn">
            <div className="faq-wrapper" id={"faq-wrapper_" + index}>
              <div className="content" id={"content_" + index}>
                <div
                  className="question-wrapper"
                  id={"question-wrapper_" + index}
                >
                  <h2 className="question" id={"question_" + index}>
                    {item.frontmatter.question}
                    <button
                      id={"button_" + index}
                      className="question-button"
                      onClick={() => {
                        handleClick("faq-wrapper_" + index);
                      }}
                    >
                      +
                    </button>
                  </h2>
                  {isShown && (
                    <div className="answer">{item.frontmatter.answer}</div>
                  )}
                </div>
              </div>
            </div>
          </Animation>
        );
      })}
    </main>
  );
};

export default Faq;
