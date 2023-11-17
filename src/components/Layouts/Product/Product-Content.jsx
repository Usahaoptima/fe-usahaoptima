import Loader from "../../Elements/Loader";
import TableProduct from "../../Fragments/Product/Table-Product";

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
                <TableProduct tableName="#" />
                <TableProduct tableName="Nama Produk" />
                <TableProduct tableName="Harga" />
                <TableProduct tableName="Stok Produk" />
                <TableProduct tableName="Action" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td">Test</td>
                <td className="td">Test</td>
                <td className="td">Test</td>
                <td className="td">Test</td>
                <td>
                  <i className="fa-regular fa-pen-to-square edit"></i>
                  <i className="fa-regular fa-trash-can delete"></i>
                </td>
              </tr>
            </tbody>
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
