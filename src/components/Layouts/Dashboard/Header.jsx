const Header = () => {
  return (
    <>
      <header className="px-3 pt-3 d-flex justify-content-between align-items-center">
        <div className="dashboard-title">
          <h2>USAHAOPTIMA</h2>
          <h4>Usaha Kecil, Misi Besar</h4>
        </div>
        <div className="dashboard-search">
          <div className="d-flex align-items-center">
            <form className="w-100 me-3" role="search">
              <input
                type="search"
                className="form-control rounded-pill"
                placeholder="🔍 Search..."
                aria-label="Search"
              />
            </form>

            <div className="d-flex gap-3">
              <img src="../../public/assets/img/icons/info.png" alt="" />
              <img src="../../public/assets/img/icons/lonceng.png" alt="" />
            </div>

            <div className="flex-shrink-0 dropdown ms-3">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../public/assets/img/dashboard/avatar.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="../../public/assets/img/dashboard/avatar.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle me-2"
                    />
                    <span id="usernamePlaceholder"></span>
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="../../public/assets/img/icons/settings.png"
                      alt="mdo"
                      width="18"
                      height="18"
                      className="rounded-circle me-2"
                    />
                    Pengaturan
                  </a>
                </li>

                <li>
                  <a id="logout" className="dropdown-item" href="#">
                    <img
                      src="../../public/assets/img/icons/signout.png"
                      alt="mdo"
                      width="18"
                      height="18"
                      className="rounded-circle me-2"
                    />
                    Keluar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
