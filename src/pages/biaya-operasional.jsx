import Footer from "../components/Layouts/Dashboard/Footer";
import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import OperationalCostPage from "../components/Layouts/Operational-Cost/Operational-Cost-Content";

const BiayaOperasional = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard">
          <Header />
          <OperationalCostPage />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default BiayaOperasional;
