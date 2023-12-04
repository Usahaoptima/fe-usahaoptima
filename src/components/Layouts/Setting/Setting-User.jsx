import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { updateUser } from "../../../services/User-Services";
import LabelForm from "../../Elements/Label-Form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SettingUser() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm();

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

  const editUser = async (form) => {
    try {
      const resRegister = await updateUser(authToken, form);

      setValue("username", "");
      setValue("email", "");
      setValue("password", "");

      if (resRegister.statusCode === 404) {
        Swal.fire({
          icon: "error",
          title: "Data Tidak Ditemukan Silahkan login kembali",
          text: resRegister.message,
        });
        navigate("/login");
      }

      if (resRegister.statusCode === 500) {
        Swal.fire({
          icon: "error",
          title: "update gagal",
          text: resRegister.message,
        });
      }

      Swal.fire({
        title: "Sukses!",
        text: "User berhasil diupdate",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating user:", error);

      // Menampilkan SweetAlert error
      Swal.fire({
        title: "Error!",
        text: "Terjadi kesalahan saat menambahkan user",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await updateUser(authToken);
        // Mengisi formulir dengan data dari API
        setValue("username", response.data.username);
        setValue("email", response.data.email);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Panggil fungsi fetchProductData saat komponen dipasang
    fetchProductData();
  }, [authToken, setValue]);

  const closeForm = () => {
    navigate("/dashoard");
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(editUser)();
    }
  };

  return (
    <>
      <div className="section-content">
        <div className="container">
          <form
            id="form-user"
            onSubmit={handleSubmit(editUser)}
            onKeyDown={handleEnterKey}
          >
            <div className="form-group mb-3">
              <LabelForm name="username" />
              <input
                type="text"
                className="form-control"
                {...register("username", {})}
                placeholder="Masukkan Username"
                autoComplete="username"
              />
            </div>
            <div className="form-group mb-3">
              <LabelForm name="email" />
              <input
                type="email"
                className="form-control"
                {...register("email", {})}
                placeholder="Masukkan Email"
                autoComplete="email"
              />
            </div>

            <div className="form-group mb-3">
              <LabelForm name="password" />
              <input
                type="password"
                className="form-control"
                {...register("password", {
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

export default SettingUser;
