import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postUser } from "../../../services/User-Services";
import LabelForm from "../../Elements/Label-Form";
import { json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SettingCreate() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm();
  const [data, setData] = useState("");

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

  const createProduct = async (data) => {
    try {
      console.log(data);

      const resRegister = await postUser(data, authToken);

      setValue("username", "");
      setValue("email", "");
      setValue("role", "");
      setValue("password", "");

      if (resRegister.statusCode === 401) {
        Swal.fire({
          icon: "error",
          title: "Register gagal",
          text: resRegister.message,
        });
      }

      if (resRegister.statusCode === 400) {
        Swal.fire({
          icon: "error",
          title: "Register gagal",
          text: resRegister.message,
        });
      }

      if (resRegister.statusCode === 500) {
        Swal.fire({
          icon: "error",
          title: "Register gagal",
          text: resRegister.message,
        });
      }

      Swal.fire({
        title: "Sukses!",
        text: "Produk berhasil ditambahkan",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/user-role");
    } catch (error) {
      console.error("Error creating product:", error);

      // Menampilkan SweetAlert error
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan produk",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const onSubmit = (data) => {
    // Mengonversi data menjadi string JSON
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
  };

  const closeForm = () => {
    navigate("/user-role");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(createProduct)();
    }
  };

  return (
    <>
      <div className="section-content">
        <div className="container mt-5">
          <form
            id="form-user"
            onSubmit={handleSubmit(createProduct)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <LabelForm name="username" />
              <input
                type="text"
                className="form-control"
                {...register("username", { required: true })}
                placeholder="Masukkan Username"
                autoComplete="username"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="email" />
              <input
                type="email"
                className="form-control"
                {...register("email", { required: true })}
                placeholder="Masukkan Email"
                autoComplete="email"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="role" />
              <select
                className="form-control"
                {...register("role", { required: true })}
              >
                <option value="">Pilih Jabatan</option>
                <option value="admin">Admin</option>
                <option value="karyawan">Karyawan</option>
                <option value="bendahara">Bendahara</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <LabelForm name="password" />
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                    message:
                      "Password must contain at least 8 characters, one uppercase letter, one digit, and one special character",
                  },
                })}
                placeholder="Masukkan Password"
                autoComplete="password"
                minLength={8}
                maxLength={16}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password.message}</span>
              )}
            </div>

            <button
              id="btn-submit"
              type="button"
              className="btn-form justify-content-center"
              onClick={closeForm}
            >
              Batal
            </button>
            <button
              id="btn-submit"
              type="submit"
              className="btn-form"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SettingCreate;
