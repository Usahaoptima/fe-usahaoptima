import Calender from "../../Fragments/Dashboard/Calender";
import CardDashboard from "../../Fragments/Dashboard/Card-Dashboard";

const DashboardContent = () => {
  return (
    <>
      <div>
        <section className="m-3 hero">
          <img src="../src/assets/img/dashboard/hero.png" alt="" />
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
