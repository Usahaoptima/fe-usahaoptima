import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";
import { useNavigate } from "react-router-dom";
import { getStaf } from "../../../services/Staff-Services";
import StafItem from "../../Fragments/Operational-Cost/Staff-Item";

const TableKaryawan = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getdataStaf = async () => {
    setIsLoading(true);
    const resStaff = await getStaf();
    setIsLoading(false);
    setStaffs(resStaff);
  };

  useEffect(() => {
    getdataStaf();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const backToBiayaOperasional = () => {
    navigate("/biaya-operasional");
  };
  const openAddKaryawan = () => {
    navigate("/detail-karyawan-form");
  };
  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button d-flex justify-content-between">
          <button onClick={openAddKaryawan}>Tambah Karyawan</button>
          <button
            style={{
              backgroundColor: "#dedede",
              color: " #146c94",
              fontWeight: "600",
            }}
            onClick={backToBiayaOperasional}
          >
            Kembali
          </button>
        </div>

        <div className="section-content">
          <div className="table-responsive">
            <table className="table table-hover mt-4">
              <thead>
                <tr>
                  <TableProduct tableName="Nama Karyawan" />
                  <TableProduct tableName="Gaji" />
                  <TableProduct tableName="Nomer Handphone" />
                  <TableProduct tableName="Email" />
                  <TableProduct tableName="Action" />
                </tr>
              </thead>
              <tbody>
                {staffs.map((staffs, index) => (
                  <StafItem key={index} staffs={staffs} />
                ))}
              </tbody>
            </table>
          </div>

          <Loader isShow={isLoading} />

          <ul className="pagination justify-content-end gap-3 m-3">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            <li
              className={`page-item ${
                endIndex >= staffs.length ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TableKaryawan;
