import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import CreateFormProduksi from "../components/Layouts/Operational-Cost/Create-Form-Produksi";

const DetailProduksiForm = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <CreateFormProduksi />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default DetailProduksiForm;
