import React, { useState, useEffect } from "react";
import axios from "axios";
import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";
import { baseurl } from "../const";

const CousterBlock = () => {
  const [customerData, setCustomerData] = useState([]);

  const handleUnblock = (id) => {
    const confirmed = window.confirm("Do you want to unblock this user?");
    if (confirmed) {
      axios
        .post(`${baseurl}/changeAccessUser/${id}`)
        .then((response) => {
          alert("User unblocked successfully!");
          // Update the state to remove the unblocked user
          setCustomerData(prevData => prevData.filter(user => user._id !== id));
        })
        .catch((error) => {
          console.error("Error unblocking user:", error);
        });
    }
  };

  useEffect(() => {
    axios
      .get(`${baseurl}/getAllBlockedUsers`)
      .then((response) => {
        const blockedUsers = response.data;
        setCustomerData(blockedUsers.User);
      })
      .catch((error) => {
        console.error("Error fetching blocked users:", error);
      });
  }, []);

  return (
    <div className="mt-4" style={{ maxHeight: "82vh", overflowY: "auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <b> Sr.</b>
            </th>
            <th scope="col">
              <b> Name</b>
            </th>
            <th scope="col">
              <b>Home Address</b>
            </th>
            <th scope="col">
              <b> Status</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer, index) => (
            <tr key={customer.id}>
              <th scope="row">{index + 1}</th>
              <td className="d-flex imagetablehight">
                <img
                  src={proflepic}
                  className="rounded-4 me-2"
                  alt=""
                  width="30px"
                  height="30px"
                />
                <p className="m-0 text-nowrap">{customer.firstname}</p>
              </td>
              <td className="text-secondary text-nowrap">{customer.city}</td>
              <td>
                <button
                  type="button"
                  className="shadow unBlock-btn"
                  onClick={() => handleUnblock(customer._id)}
                >
                  Un Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CousterBlock;
