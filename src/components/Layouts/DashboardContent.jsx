import Calender from "../Fragments/Calender";
import CardDashboard from "../Fragments/Card-Dashboard";

const DashboardContent = () => {
  return (
    <>
      <div>
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
                <img src="../src/assets/img/icons/info.png" alt="" />
                <img src="../src/assets/img/icons/lonceng.png" alt="" />
              </div>

              <div className="flex-shrink-0 dropdown ms-3">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="../src/assets/img/avatar.png"
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
                        src="../src/assets/img/avatar.png"
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
                        src="../src/assets/img/icons/settings.png"
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
                        src="../src/assets/img/icons/signout.png"
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

        <section className="m-3 hero">
          <img src="../src/assets/img/hero.png" alt="" />
        </section>

        <section className="ms-3 mt-5 dashboard-description d-flex justify-content-between">
          <div className="d-flex flex-column">
            <h2>Hai Sobat UMKM!!</h2>
            <h3>Sudah Siap Mengatur Usahamu Hari Ini?</h3>
            <h3>Yuk Mulai Mengatur Usahamu</h3>
          </div>
          <div>
            <Calender />
          </div>
        </section>

        <section className="mt-5 d-flex gap-3 justify-content-center dashboard-card">
          <CardDashboard
            image="../src/assets/img/icons/pemasukan.png"
            title="Pemasukan Hari Ini"
            description="Jumat 8 September 2023"
            quantity="Rp. 300.000"
          />

          <CardDashboard
            image="../src/assets/img/icons/stok.png"
            title="Sisa Stok Hari Ini"
            description="Jumat 8 September 2023"
            quantity="Pcs. 30"
          />

          <CardDashboard
            image="../src/assets/img/icons/jumlah-penjualan.png"
            title="Jumlah Penjualan Hari Ini"
            description="Jumat 8 September 2023"
            quantity="Pcs. 30"
          />

          <CardDashboard
            image="../src/assets/img/icons/jumlah-pelanggan.png"
            title="Jumlah Pelanggan Hari Ini"
            description="Jumat 8 September 2023"
            quantity="Orang. 2"
          />
        </section>
      </div>
    </>
  );
};

export default DashboardContent;
