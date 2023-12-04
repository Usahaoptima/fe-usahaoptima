import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const ChartComponent = ({ apiUrl }) => {
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  function getAuthTokenFromCookies() {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "access_token") {
        return value;
      }
    }
    return null;
  }
  const authToken = getAuthTokenFromCookies();
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, config);
        setChartData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    // Hancurkan chart yang sudah ada
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Cek apakah chartData ada data atau tidak
    if (chartData.length === 0) {
      // Jika tidak ada data, tampilkan pesan bahwa belum ada data
      const ctx = chartRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.font = "20px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(
        "Belum ada data",
        ctx.canvas.width / 2,
        ctx.canvas.height / 2
      );
      return;
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartData.map((item) => getMonthName(item.month)),
        datasets: [
          {
            label: "Total Amount per Bulan",
            data: chartData.map((item) => item.totalAmount),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Bulan",
            },
          },
          y: {
            title: {
              display: true,
              text: "Total Amount",
            },
          },
        },
      },
    });
  }, [chartData]);

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

  return (
    <canvas
      ref={chartRef}
      className="w-100"
      style={{ maxWidth: "100%" }}
    ></canvas>
  );
};

export default ChartComponent;
