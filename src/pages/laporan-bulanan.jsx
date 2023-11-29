import React from "react";
import Sidebar from "../components/Layouts/Dashboard/Sidebar";
import Header from "../components/Layouts/Dashboard/Header";
import Footer from "../components/Layouts/Dashboard/Footer";
import TitleTable from "../components/Elements/Title-Table";
import ReportContentMonth from "../components/Layouts/Report/Report-Content-Month";

function laporanbulanan() {
  return (
    <>
      <main>
        <Sidebar />
        <section id="dashboard" style={{ width: "100%" }}>
          <Header />
          <TitleTable name="Laporan Keuangan" />
          <ReportContentMonth />
          <hr className="hr" />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default laporanbulanan;
