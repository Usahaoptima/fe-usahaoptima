import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RegisterBusiness } from "../../../services/Auth-Services";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function ModalRegister(props) {
  const { onHide, checkbox, idbusiness, onSubmit, role } = props;
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!businessName || !businessType || !businessDescription) {
      return;
    }
    const data = {
      business_name: businessName,
      business_type: businessType,
      business_description: businessDescription,
    };

    try {
    } catch (error) {}

    const resRegisterBusiness = await RegisterBusiness(data);

    if (resRegisterBusiness.statusCode === 401) {
      MySwal.fire({
        icon: "error",
        title: "Register business gagal",
        text: resRegisterBusiness.message,
      });
      setBusinessName("");
    }

    if (resRegisterBusiness.statusCode === 400) {
      MySwal.fire({
        icon: "error",
        title: "Register business gagal",
        text: resRegisterBusiness.message,
      });
    }

    if (resRegisterBusiness.statusCode === 201) {
      console.log(resRegisterBusiness);
      checkbox(true);
      role("admin");
      idbusiness(resRegisterBusiness.data._id);
      onSubmit();
    } else {
      console.log("something went wrong");
      checkbox(false);
      onSubmit();
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="form-group col-12 flex-column justify-content-center align-items-center ">
            <h4>Daftarkan Bisnismu</h4>
            <label htmlFor="businessName">Isi Nama Bisnis Mu</label>
            <input
              id="businessName"
              type="text"
              className="form-control my-3"
              placeholder="Nama Bisnis"
              value={businessName}
              required
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <label htmlFor="business_type">Pilih Tipe Bisnis Mu</label>
            <select
              id="business_type"
              className="form-control my-3"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
            >
              <option value="">Click Untuk Memilih</option>
              <option value="jasa">Jasa</option>
              <option value="barang">Barang</option>
            </select>

            <label htmlFor="business_description">Desripsikan Bisnis Mu</label>
            <textarea
              name="business_description"
              id="business_description"
              cols="30"
              rows="10"
              className="form-control my-3"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              required
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
