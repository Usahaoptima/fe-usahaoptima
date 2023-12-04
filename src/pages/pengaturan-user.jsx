import Header from "../components/Layouts/Dashboard/Header";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";

import Footer from "../components/Layouts/Dashboard/Footer";
import SettingContent from "../components/Layouts/Setting/Setting-Content";
import TitleTable from "../components/Elements/Title-Table";

const pengaturan = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Pengaturan User" />
          <SettingContent />
          <hr className="mt-5" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default pengaturan;
