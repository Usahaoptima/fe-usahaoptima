import React from "react";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import Header from "../components/Layouts/Dashboard/Header";
import ReportContent from "../components/Layouts/Report/Report-Content";
import Footer from "../components/Layouts/Dashboard/Footer";
import TitleTable from "../components/Elements/Title-Table";

const laporanKeuangan = () => {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Laporan Keuangan  " />
          <ReportContent />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default laporanKeuangan;
