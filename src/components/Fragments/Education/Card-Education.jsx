import PropTypes from "prop-types";

import "../../../../public/assets/css/EducationPage.css";

const CardEducation = ({ imageSrc, alt, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="edu-item">
        <div className="edu-image">
          <img loading="lazy" src={imageSrc} alt={alt} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="/manajemen-keuangan" className="btn">
          Read more
        </a>
      </div>
    </div>
  );
};

CardEducation.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardEducation;
