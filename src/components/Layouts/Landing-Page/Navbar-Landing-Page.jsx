function NavbarLandingPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="../src/assets/img/landing-page/Group.svg"
              alt="logo"
              height="30"
            />
          </a>
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
              <li className="nav-item">
                <a
                  className="nav-link ml-9"
                  href="/login-register-page/index.html"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary"
                  href="/login-register-page/register.html"
                  role="button"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLandingPage;
