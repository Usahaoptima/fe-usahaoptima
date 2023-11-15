import Sidebar from "../components/Layouts/Sidebar";
import Footer from "../components/Layouts/Footer";
import DashboardContent from "../components/Layouts/DashboardContent";

const dashboard = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard">
          <DashboardContent />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default dashboard;
