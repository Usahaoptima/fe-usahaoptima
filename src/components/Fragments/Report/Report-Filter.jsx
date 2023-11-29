import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReportFilter() {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("");
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedMonth(selectedValue);
    navigate(`/laporan-keuangan/${selectedValue}`);
  };

  return (
    <div className="container mt-3">
      <label htmlFor="selectMonth" className="form-label label-filter">
        Pilih Bulan:
      </label>
      <select
        id="selectMonth"
        className="form-select"
        value={selectedMonth}
        onChange={handleChange}
      >
        <option value="">Pilih Bulan</option>
        <option value="1">Januari</option>
        <option value="2">Februari</option>
        <option value="3">Maret</option>
        <option value="4">April</option>
        <option value="5">Mei</option>
        <option value="6">Juni</option>
        <option value="7">Juli</option>
        <option value="8">Agustus</option>
        <option value="9">September</option>
        <option value="10">Oktober</option>
        <option value="11">November</option>
        <option value="12">Desember</option>
      </select>
    </div>
  );
}

export default ReportFilter;
