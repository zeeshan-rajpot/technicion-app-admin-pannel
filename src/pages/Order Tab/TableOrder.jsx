import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../const";
import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";

const TableOrder = () => {
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get(`${baseurl}/getAllOrders`)
      .then((response) => {
        console.log(response.data.allOrders[0].image.data);

        // Assuming your API response is an array of orders
        setOrdersData(response.data.allOrders);

      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);



  const getBlobFromBuffer = (buffer) => {
    return new Blob([buffer], { type: 'image/png' });
  }

  return (
    <>
      <div className="mt-4" style={{ maxHeight: "82vh", overflowY: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <b>Sr.</b>
              </th>
              <th scope="col">
                <b>Name</b>
              </th>
              <th scope="col">
                <b>Order I'D</b>
              </th>
              <th scope="col">
                <b>Order Type</b>
              </th>
              <th scope="col">
                <b>Vendor I'D</b>
              </th>
              <th scope="col">
                <b>Date</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData && ordersData.map((order, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="d-flex ">
                  <img src={URL.createObjectURL(getBlobFromBuffer(order.image.data))} className="rounded-4 me-2" alt="" />

                    <p className="m-0 text-nowrap">{order.username}</p>
                  </td>
                  <td className="text-secondary text-nowrap">{order._id}</td>
                  <td>
                    <b className="text-nowrap">{order.type}</b>
                  </td>
                  <td className="text-secondary text-nowrap">{order.sellerId}</td>
                  <td className="text-secondary text-nowrap">{order.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableOrder;
