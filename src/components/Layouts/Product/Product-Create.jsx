const ProductCreate = () => {
  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <h2 className="section-content-title">Tambah Produk</h2>
          <form id="form-produk">
            <div className="form-group mb-3">
              <label htmlFor="name" className="py-2 label-title">
                Nama Produk
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Masukkan Nama Produk"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="price" className="py-2 label-title">
                Harga Produk
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Masukkan Harga Produk"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="quantity" className="py-2 label-title">
                Stok Produk
              </label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                placeholder="Masukkan Stok Produk"
              />
            </div>
            <button id="btn-submit" type="submit" className="btn-form">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductCreate;
