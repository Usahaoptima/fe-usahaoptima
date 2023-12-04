const ReportItems = (props) => {
  const { month, criteria, total } = props.report;

  const getMonthName = (monthNumber) => {
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    return monthNames[monthNumber - 1] || "";
  };

  const formatCurrency = (value) => {
    if (!value) return "belum ada data";

    // Menggunakan Number.toLocaleString untuk memformat nilai menjadi format rupiah
    return new Number(value).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
  };

  const textColorStyle = {
    color: criteria === "pemasukan" ? "green" : "red",
  };

  return (
    <>
      <tr>
        <td className="td">{getMonthName(month)}</td>
        <td className="td" style={textColorStyle}>
          {criteria}
        </td>
        <td className="td">{formatCurrency(total)}</td>
      </tr>
    </>
  );
};

export default ReportItems;
