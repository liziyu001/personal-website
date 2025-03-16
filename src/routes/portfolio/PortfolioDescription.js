import { React } from 'react';

const PortfolioDescription = () => {
  return (
    <section className="portfolio-content">
      <h2 className="title-font pink-text h2-tag">Portfolio</h2>
      <p className="white-text p-tag">
        I've invested substantial time in a variety of projects. Here are a few of my major projects that shows my expertise. Feel free to explore the detail on my {" "}
        <span>
          <a
            href="https://github.com/liziyu001/"
            className="pink-text"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </span>
      </p>
    </section>
  );
};

export default PortfolioDescription;
