import * as React from "react";
import "./faq.css";
import { useStaticQuery, graphql } from "gatsby";
import { useState } from "react";

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

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <main className="faq-section">
      <div className="faq-heading">
        <h1 className="fr-title">Frequently asked questions</h1>
      </div>

      {data.allMarkdownRemark.nodes.map((item) => {
        return (
          <div className="faq-wrapper">
            <div className="content">
              <div className="question-wrapper" key={item.id}>
                <h2 className="question">
                  {item.frontmatter.question}
                  <button
                    id={item.id}
                    className="question-button"
                    onClick={handleClick}
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
        );
      })}
    </main>
  );
};

export default Faq;
