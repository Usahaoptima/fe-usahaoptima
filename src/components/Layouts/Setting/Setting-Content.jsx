import React, { useEffect, useState } from "react";
import TableProduct from "../../Fragments/Product/Table-Product";
import Loader from "../../Elements/Loader";
import UserContent from "../../Fragments/User/User-Content";
import { getUsers } from "../../../services/User-Services";
import { useNavigate } from "react-router-dom";

function SettingContent() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const getUsersData = async () => {
    setIsLoading(true);

    const resUser = await getUsers(authToken);
    setUsers(resUser.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const openAddUsers = () => {
    navigate("/user-form");
  };

  return (
    <>
      <section id="produk" className="mt-4">
        <div className="produk-button">
          <button onClick={openAddUsers}>Tambah User</button>
        </div>
        <div className="section-content">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <TableProduct tableName="UserName" />
                <TableProduct tableName="Email" />
                <TableProduct tableName="Role" />
                <TableProduct tableName="Action" />
              </tr>
            </thead>
            <tbody>
              {users.slice(startIndex, endIndex).map((user, index) => {
                return <UserContent key={index} user={user} />;
              })}
            </tbody>
          </table>

          <Loader isShow={isLoading} />
          <ul className="pagination justify-content-end gap-3 m-3">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            <li
              className={`page-item ${
                endIndex >= users.length ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SettingContent;
