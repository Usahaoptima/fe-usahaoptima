import React from "react";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import Header from "../components/Layouts/Dashboard/Header";
import SettingCreate from "../components/Layouts/Setting/Setting-Create";
import Footer from "../components/Layouts/Dashboard/Footer";
import TitleTable from "../components/Elements/Title-Table";

function TambahUser() {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Tambah User" />
          <SettingCreate />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default TambahUser;
