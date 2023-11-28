import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import ReportChart from "./Report-Chart";
import { useNavigate } from "react-router-dom";

function ReportContent() {
  return (
    <>
      <ReportChart />
      <section id="produk" className="mt-4">
        <div className="produk-button">
          <button>Tambah User</button>
        </div>
        <div className="section-content">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <TableProduct tableName="Email" />
                <TableProduct tableName="Role" />
                <TableProduct tableName="Action" />
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <ul className="pagination justify-content-end gap-3 m-3">
            <li className="page-item">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ReportContent;
