import { useNavigate } from "react-router-dom";
import "../../../../public/assets/css/OperationalCostPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CostSummary() {
  const [totalCost, setTotalCost] = useState(0);
  const [itemCost, setItemCost] = useState(0);
  const [staffCost, setStaffCost] = useState(0);
  const [recentExpenses, setRecentExpenses] = useState([]);
  const [recentItems, setRecentItems] = useState([]);
  const navigate = useNavigate();

  const getAuthTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "access_token") {
        return value;
      }
    }
    return null;
  };

  const authToken = getAuthTokenFromCookies();

  const fetchTotalCost = async (apiEndpoint) => {
    try {
      const response = await axios.get(
        `https://usahaoptima-api.sengked.com/api/v1/${apiEndpoint}/total`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;
  
      if (data?.data?.totalCost !== undefined) {
        if (apiEndpoint === "expenses") {
          setTotalCost(data.data.totalCost);
        } else if (apiEndpoint === "item") {
          setItemCost(data.data.totalCost);
        } else if (apiEndpoint === "staff") {
          setStaffCost(data.data.totalCost);
        }
      } else {
        console.error(
          `Data total_cost tidak tersedia atau undefined untuk ${apiEndpoint}.`
        );
      }
    } catch (error) {
      console.error(`Error fetching totalCost for ${apiEndpoint}:`, error);
    }
  };
  
  const fetchRecentData = async (apiEndpoint) => {
    try {
      const response = await axios.get(
        `https://usahaoptima-api.sengked.com/api/v1/${apiEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;
  
      if (apiEndpoint === "expenses") {
        setRecentExpenses(data.data.slice(-3).reverse());
      } else if (apiEndpoint === "item") {
        setRecentItems(data.data.slice(-6).reverse());
      }
    } catch (error) {
      console.error(`Error fetching recent data for ${apiEndpoint}:`, error);
    }
  };
  
  useEffect(() => {
    // Fetch totalCost
    fetchTotalCost("expenses");
    fetchTotalCost("item");
    fetchTotalCost("staff");
  
    // Fetch recent data
    fetchRecentData("expenses");
    fetchRecentData("item");
  }, [authToken]);
  

  const OpenDetailProduksi = () => {
    navigate("/detail-produksi");
  };

  const OpenDetailKaryawan = () => {
    navigate("/detail-karyawan");
  };

  const OpenDetailToko = () => {
    navigate("/detail-toko");
  };

  const OpenEdukasi = () => {
    navigate("/edukasi");
  };

  return (
    <>
      <div className="div">
        <div className="section-title mt-5">Biaya Operasional</div>
        <div className="div-3">
          Transparansi Keuangan untuk Kesuksesan Bisnis Anda
        </div>
        <div className="div-4">
          <div className="div-5">
            <div className="column">
              <div className="div-6">
                <div className="div-7">
                  <div className="div-8">Ringkasan Biaya 30 Hari Terakhir</div>
                  <div className="div-9">
                    <div className="div-10">
                      <div className="div-11">
                        Rp. {totalCost.toLocaleString()}
                      </div>
                      <div
                        className="div-12 clickable-item"
                        onClick={OpenDetailToko}
                        style={{ cursor: "pointer" }}
                      >
                        Toko
                      </div>
                    </div>
                    <div className="div-13">
                      <div className="div-14">
                        Rp. {staffCost.toLocaleString()}
                      </div>
                      <div
                        className="div-15 clickable-item"
                        onClick={OpenDetailKaryawan}
                        style={{ cursor: "pointer" }}
                      >
                        Karyawan
                      </div>
                    </div>
                    <div className="div-16">
                      <div className="div-17">
                        Rp. {itemCost.toLocaleString()}
                      </div>
                      <div
                        className="div-18 clickable-item"
                        onClick={OpenDetailProduksi}
                        style={{ cursor: "pointer" }}
                      >
                        Barang
                      </div>
                    </div>
                  </div>
                  <div className="div-19">
                    Kebingungan dalam mengatur keuangan?
                  </div>
                  <div
                    className="div-20 clickable-item"
                    onClick={OpenEdukasi}
                    style={{ cursor: "pointer" }}
                  >
                    Simak tipsnya disini.
                  </div>
                </div>
                <div className="div-21">
                  <div className="div-22">
                    <div className="div-23">Pembiayaan Toko</div>
                    <div
                      className="div-24 clickable-item"
                      onClick={OpenDetailToko}
                      style={{ cursor: "pointer" }}
                    >
                      Detail Pengeluaran
                    </div>
                  </div>
                  <div className="div-25">
                    <div className="div-26">Pembayaran</div>
                    <div className="biaya">Biaya</div>
                  </div>
                  {recentExpenses.length > 0 ? (
                    recentExpenses.map((expense) => (
                      <div key={expense._id} className="div-27">
                        <div className="div-28">{expense.expense_name}</div>
                        <div className="div-29">
                          Rp. {expense.cost.toLocaleString()}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="placeholder-text">
                      Belum ada data pembayaran
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-37">
                <div className="div-38">Pembiayaan Produksi</div>
                <div
                  className="div-39 clickable-item"
                  onClick={OpenDetailProduksi}
                  style={{ cursor: "pointer" }}
                >
                  Detail
                </div>
                {recentItems.length > 0 ? (
                  recentItems.map((item) => (
                    <div key={item._id} className="div-40">
                      <div className="div-41">
                        <div className="div-42">{item.item_name}</div>
                        <div className="div-43">
                          Jumlah barang: {item.quantity} Pcs
                        </div>
                      </div>
                      <div className="div-44">
                        Rp. {item.cost.toLocaleString()}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="placeholder-text">
                    Belum ada data pembiayaan produksi
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CostSummary;
