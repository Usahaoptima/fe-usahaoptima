import ButtonDropdownSidebar from "../../Fragments/Dashboard/Button-Dropdown-Sidebar";
import ButtonSidebar from "../../Fragments/Dashboard/Button-Sidebar";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isRouteActive = (routes) => {
    return routes.includes(location.pathname);
  };

  return (
    <>
      <aside>
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <a
            href="/dashboard"
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/assets/img/dashboard/usahaoptima.jpg"
              alt="logo"
              className="logo"
            />
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <ButtonSidebar
                image="/assets/img/icons/dashboard.png"
                title="Dashboard"
                active={isRouteActive("/dashboard")}
              />
            </Link>

            <ButtonDropdownSidebar
              id1="#collapseExample1"
              id2="collapseExample1"
              controls="collapseExample1"
              image="/assets/img/icons/laporan.png"
              title="Laporan"
              active={isRouteActive(["/laporan-keuangan", "/laporan-stok"])}
              dropdownImage1="/assets/img/icons/keuangan.png"
              dropdownTitle1="Keuangan"
              link1="/laporan-keuangan"
              dropdownImage2="/assets/img/icons/stock.png"
              dropdownTitle2="Stok"
              link2="/laporan-stok"
            />

            <Link to="/penjualan" style={{ textDecoration: "none" }}>
              <ButtonSidebar
                image="/assets/img/icons/penjualan.png"
                title="Penjualan"
                active={isRouteActive("/penjualan")}
              />
            </Link>

            <Link to="/biaya-operasional" style={{ textDecoration: "none" }}>
              <ButtonSidebar
                image="/assets/img/icons/biaya.png"
                title="Biaya Operasional"
                active={isRouteActive("/biaya-operasional")}
              />
            </Link>

            <Link to="/produk" style={{ textDecoration: "none" }}>
              <ButtonSidebar
                image="/assets/img/icons/produk.png"
                title="Produk"
                active={isRouteActive("/produk")}
              />
            </Link>

            <Link to="/edukasi" style={{ textDecoration: "none" }}>
              <ButtonSidebar
                image="/assets/img/icons/edukasi.png"
                title="Edukasi"
                active={isRouteActive("/edukasi")}
              />
            </Link>

            <ButtonDropdownSidebar
              id1="#collapseExample2"
              id2="collapseExample2"
              controls="collapseExample2"
              image="/assets/img/icons/pengaturan.png"
              title="Pengaturan"
              active={isRouteActive(["/user-role", "/user-setting"])}
              dropdownImage1="/assets/img/icons/user-role.png"
              dropdownTitle1="User Role"
              link1="/user-role"
              dropdownImage2="/assets/img/icons/add-article.png"
              dropdownTitle2="User Setting"
              link2="/user-setting"
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
