import { Link } from "react-router-dom";
import { React } from 'react';

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Ziyu Li</em>
        <br></br>CS & DS Undergraduate at Purdue University
      </h1>
      <p className="gray-text p-tag">Projects</p>
      <Link className="pink-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeroPreview;
