import PropTypes from "prop-types";
import BackButton from "../../Elements/Back-Button";

const ArticleContent = ({ article }) => {
  return (
    <div className="container main-container mt-5 article-page">
      <div className="row justify-content-between">
        <BackButton />

        <div className="col-md-12">
          <h1
            className="text-center display-4 color article-title pb-3 border-bottom border-dark"
            style={{ color: "#19a7ce" }}
          >
            {article.title}
          </h1>
        </div>
      </div>

      <div className="container mt-5 text-center">
        <img
          loading="lazy"
          src={article.images[0].titleImg}
          className="img-fluid w-100 main-image rounded"
          alt="Image 2"
        />
      </div>

      <div className="article-content">
        {article.points.map((point, index) => (
          <div key={index} className="container mt-5">
            <div className="row g-5 flex-md-nowrap">
              <div className="col-md-6">
                <img
                  loading="lazy"
                  src={article.images[1].pointImg[index]}
                  className="img-fluid rounded w-100"
                  alt={`Point ${index + 1}`}
                />
              </div>
              <div className="col-md-6 border-bottom">
                <h2>{point}</h2>
                <p className="lead">{article.contents[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-5 text-center">
        <div className="g-5">
          <img
            loading="lazy"
            src={article.images[2].closingImg}
            className="img-fluid rounded banner closing-image"
            alt="Image 6"
          />
          <div className="col-md-6 mx-auto mt-3 w-75">
            <img
              loading="lazy"
              src="/assets/img/education/block-quotes.svg"
              className="img-fluid rounded mt-3"
              alt="Image 7"
            />
            <blockquote className="blockquote">
              <p className="mb-0 quote-text">{article.quotes}</p>
              <p className="blockquote-footer mt-1 mb-4 quote-author">
                {article.quotesAuthor}
              </p>
            </blockquote>
            <p className="mt-3"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleContent.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    points: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    contents: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    quotes: PropTypes.string.isRequired,
    quotesAuthor: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleContent;
