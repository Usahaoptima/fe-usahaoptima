import { Link } from "react-router-dom";

function NavbarLandingPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mt-2">
            <img
              src="/assets/img/dashboard/usahaoptima.jpg"
              alt="logo"
              style={{ width: "55px", height: "55px", marginRight: "2px" }}
            />
            <h4
              style={{
                textTransform: "uppercase",
                fontWeight: "bolder",
                color: "#146c94",
                fontSize: "16px",
              }}
            >
              usahaoptima
            </h4>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-light mt-sm-3 mt-md-0"
            id="navbarNav"
          >
            <ul className="navbar-nav col-12 mx-5">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item col-md-7 col-xl-8">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <div className="nav-end d-flex gap-3">
                <li className="nav-item">
                  <Link to="/login" className="nav-link " role="button">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link btn btn-primary"
                    role="button"
                    style={{ width: "150px" }}
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLandingPage;
