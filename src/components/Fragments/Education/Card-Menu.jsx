import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../../../public/assets/css/EducationPage.css";

const CardMenu = ({ article }) => {
  const pubDate = new Date(article.createdAt).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const maxDescriptionLength = 15;

  let description = article.contents[0];
  if (description.split(" ").length > maxDescriptionLength) {
    description =
      description.split(" ").splice(0, maxDescriptionLength).join(" ") + "...";
  }

  return (
    <div className="col-md-4 col-sm-6">
      <div className="cards mb-5 w-100">
        <img
          src={article.images[0]?.titleImg}
          alt="Image"
          className="card-img-top rounded"
        />
        <div className="card-body">
          <Link
            to={`/article/${article.id}`}
            className="text-decoration-none article-title"
          >
            <h2 className="card-title-edu text-center text-decoration-none title mb-2 article-title">
              {article.title}
            </h2>
          </Link>
          <p className="description">{description}</p>
          <p className="pub-date">
            {pubDate} <span>Author: Dick Mullen</span>
          </p>
        </div>
      </div>
    </div>
  );
};

CardMenu.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    articleUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    contents: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CardMenu;
