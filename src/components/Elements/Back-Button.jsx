import { Link, useLocation } from "react-router-dom";

const BackButton = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === "/manajemen-keuangan";

  const redirectPath = isMenuPage ? "/edukasi" : "/manajemen-keuangan";

  return (
    <div className="col-md-6">
      <Link to={redirectPath}>
        <img
          src="/assets/img/education/categories/arrow.png"
          alt="Image"
          width="40"
        />
      </Link>
    </div>
  );
};

export default BackButton;
