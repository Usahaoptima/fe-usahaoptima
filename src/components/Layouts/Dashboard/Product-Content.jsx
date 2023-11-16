import Loader from "../../Elements/Loader";

const ProdukContent = () => {
  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button">
          <button>Tambah Produk</button>
        </div>
        <Loader />
        <div className="section-content">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <th scope="col" className="th">
                  #
                </th>
                <th scope="col" className="th">
                  Nama Produk
                </th>
                <th scope="col" className="th">
                  Harga Produk
                </th>
                <th scope="col" className="th">
                  Stok Produk
                </th>
                <th scope="col" className="th">
                  Action
                </th>
              </tr>
            </thead>
            <tbody id="product"></tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end gap-3 m-3">
              <li id="previous" className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li id="next" className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default ProdukContent;
