import "./Footer.sass";
import { React } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <article className="footer">
      <a
        href="https://github.com/liziyu001"
        target="_blank"
        rel="noopener noreferrer">
        Ziyu Li &copy;2025 - {currentYear}
      </a>
    </article>
  );
};

export default Footer;
