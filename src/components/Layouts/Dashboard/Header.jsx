import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(null);

  const getUsername = (token) => {
    const decode = jwtDecode(token);
    const user = decode.data.user;
    setUsername(user);
    return user;
  };

  useEffect(() => {
    const storedToken = Cookies.get("access_token");
    if (storedToken) {
      setToken(storedToken);
      getUsername(storedToken);
    } else {
      // Tidak bisa login jika tidak ada token :p
      navigate("/login");
    }
  }, [navigate]);

  const handleSignOut = () => {
    Cookies.remove("access_token");
    navigate("/login");
  };

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
              <img src="/assets/img/icons/info.png" alt="" />
              <img src="/assets/img/icons/lonceng.png" alt="" />
            </div>

            <div className="flex-shrink-0 dropdown ms-3">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/img/dashboard/avatar.png"
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
                      src="/assets/img/dashboard/avatar.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle me-2"
                    />
                    <span id="usernamePlaceholder">{username}</span>
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="/assets/img/icons/settings.png"
                      alt="mdo"
                      width="18"
                      height="18"
                      className="rounded-circle me-2"
                    />
                    Pengaturan
                  </a>
                </li>

                <li>
                  <a
                    id="logout"
                    className="dropdown-item"
                    href="#"
                    onClick={handleSignOut}
                  >
                    <img
                      src="/assets/img/icons/signout.png"
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
