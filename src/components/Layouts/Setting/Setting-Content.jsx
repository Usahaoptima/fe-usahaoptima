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
              {users.map((user, index) => {
                return <UserContent key={index} user={user} />;
              })}
            </tbody>
          </table>

          <Loader isShow={isLoading} />

          <ul className="pagination justify-content-end gap-3 m-3">
            <li className="page-item">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SettingContent;
