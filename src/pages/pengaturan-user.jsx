import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";

import Footer from "../components/Layouts/Dashboard/Footer";
import PenjualanContent from "../components/Layouts/Penjualan/Penjualan-Content";

const pengaturan = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <PenjualanContent />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default pengaturan;
