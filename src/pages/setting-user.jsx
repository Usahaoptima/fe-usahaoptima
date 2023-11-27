import React from "react";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import Header from "../components/Layouts/Dashboard/Header";
import SettingUser from "../components/Layouts/Setting/Setting-User";
import Footer from "../components/Layouts/Dashboard/Footer";
import TitleTable from "../components/Elements/Title-Table";

function settinguser() {
  return (
    <main>
      <Sidebar />
      <section id="dashboard" style={{ width: "100%" }}>
        <Header />
        <TitleTable name="Setting User" />
        <SettingUser />
        <hr className="hr" />
        <Footer />
      </section>
    </main>
  );
}

export default settinguser;
