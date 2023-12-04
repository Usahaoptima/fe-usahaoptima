import PropTypes from "prop-types";
import CardMenu from "../../Fragments/Education/Card-Menu";
import BackButton from "../../Elements/Back-Button";
// import { useEffect } from "react";

const MenuContent = ({ articles }) => {
  // useEffect(() => {
  //   console.log("Articles:", articles);
  // }, [articles]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <BackButton />

        <div className="col-md-12">
          <h1 className="text-center display-2 color">Manajemen Keuangan</h1>
        </div>
      </div>

      <div className="container mt-5 px-2">
        <div className="row" id="article-list">
          {articles.map((article) => (
            <CardMenu key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

MenuContent.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.object).isRequired,
      articleUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      contents: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default MenuContent;
