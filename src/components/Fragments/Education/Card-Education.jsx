import PropTypes from "prop-types";

const CardEducation = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="card edu-item">
        <img
          loading="lazy"
          src={imageSrc}
          className="card-img-top"
          alt={altText}
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <a href="./articles/index.html" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

CardEducation.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardEducation;
