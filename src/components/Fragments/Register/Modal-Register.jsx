import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalRegister(props) {
  const { onHide } = props;
  const [businessName, setBusinessName] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lengkapi Data Bisnis
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group col-12 flex-column justify-content-center align-items-center ">
            <h4>Daftarkan Bisnismu</h4>
            <label htmlFor="businessName">Isi Nama Bisnis Mu</label>
            <input
              id="businessName"
              type="text"
              className="form-control my-3"
              placeholder="Nama Bisnis"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <label htmlFor="business_type">Pilih Tipe Bisnis Mu</label>
            <select id="business_type" className="form-control my-3">
              <option value="jasa">Jasa</option>
              <option value="barang">Barang</option>
            </select>

            <textarea
              name="business_description"
              id="business_description"
              cols="30"
              rows="10"
              className="form-control my-3"
            ></textarea>

            <button type="submit" className="btn btn-primary send">
              Send
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn btn-danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRegister;
