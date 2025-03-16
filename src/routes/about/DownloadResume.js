import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Ziyu_Li_Resume.pdf";
import { React } from 'react';

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Ziyu_Li_Resume.pdf">
        <img
          src={DownloadIcon}
          alt="Resume download button"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
