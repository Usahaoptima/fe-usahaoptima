const ReportMonth = (props) => {
  const { create_at, criteria, total_amount } = props.report;

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
        <td className="td">{create_at}</td>
        <td className="td" style={textColorStyle}>
          {criteria}
        </td>
        <td className="td">{formatCurrency(total_amount)}</td>
      </tr>
    </>
  );
};

export default ReportMonth;
