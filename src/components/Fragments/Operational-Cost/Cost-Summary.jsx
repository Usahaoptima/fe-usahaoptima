import { useNavigate } from "react-router-dom";
import "../../../../public/assets/css/OperationalCostPage.css";

function CostSummary() {
  const navigate = useNavigate();

  const OpenDetailProduksi = () => {
    navigate("/detail-produksi");
  };

  const OpenDetailKaryawan = () => {
    navigate("/detail-karyawan");
  };

  const OpenDetailToko = () => {
    navigate("/detail-toko");
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
                      <div className="div-11">Rp. 14.000.000</div>
                      <div
                        className="div-12"
                        onClick={OpenDetailToko}
                        style={{ cursor: "pointer" }}
                      >
                        Toko
                      </div>
                    </div>
                    <div className="div-13">
                      <div className="div-14">Rp. 10.000.000</div>
                      <div
                        className="div-15"
                        onClick={OpenDetailKaryawan}
                        style={{ cursor: "pointer" }}
                      >
                        Karyawan
                      </div>
                    </div>
                    <div className="div-16">
                      <div className="div-17">Rp. 15.000.000</div>
                      <div
                        className="div-18"
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
                  <div className="div-20">Simak tipsnya disini.</div>
                </div>
                <div className="div-21">
                  <div className="div-22">
                    <div className="column-2">
                      <div className="div-23">
                        <div className="div-24">Pembiayaan Toko</div>
                        <div className="div-25">
                          <div className="div-26">Pembayaran</div>
                          <div className="div-27">Sewa Toko</div>
                          <div className="div-28">Listrik dan Utilitas</div>
                          <div className="div-29">Renovasi Dapur</div>
                        </div>
                      </div>
                    </div>
                    <div className="column-3">
                      <div className="div-30">
                        <div className="div-31">
                          <div
                            className="div-32"
                            onClick={OpenDetailToko}
                            style={{ cursor: "pointer" }}
                          >
                            Detail Pengeluaran
                          </div>
                          <div className="div-33">Biaya</div>
                        </div>
                        <div className="div-34">Rp. 4.000.000</div>
                        <div className="div-35">Rp. 1.000.000</div>
                        <div className="div-36">Rp. 9.000.000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-37">
                <div className="div-38">Pembiayaan Produksi</div>
                <div
                  className="div-39"
                  onClick={OpenDetailProduksi}
                  style={{ cursor: "pointer" }}
                >
                  Detail
                </div>
                <div className="div-40">
                  <div className="div-41">
                    <div className="div-42">Tepung Terigu</div>
                    <div className="div-43">Jumlah barang : 10 Packet</div>
                  </div>
                  <div className="div-44">Rp. 430.000</div>
                </div>
                <div className="div-45">
                  <div className="div-46">
                    <div className="div-47">Garam</div>
                    <div className="div-48">Jumlah barang : 10 Packet</div>
                  </div>
                  <div className="div-49">Rp. 257.000</div>
                </div>
                <div className="div-50">
                  <div className="div-51">
                    <div className="div-52">Ragi</div>
                    <div className="div-53">Jumlah barang : 10 Packet</div>
                  </div>
                  <div className="div-54">Rp. 405.000</div>
                </div>
                <div className="div-55">
                  <div className="div-56">
                    <div className="div-57">Gula</div>
                    <div className="div-58">Jumlah barang : 10 Packet</div>
                  </div>
                  <div className="div-59">Rp. 502.000</div>
                </div>
                <div className="div-60">
                  <div className="div-61">
                    <div className="div-62">Mentega</div>
                    <div className="div-63">Jumlah barang : 10 Packet</div>
                  </div>
                  <div className="div-64">Rp. 530.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CostSummary;
