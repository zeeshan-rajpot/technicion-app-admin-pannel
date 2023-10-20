import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../pages/const";
import proflepic from "../../src/images/Screenshot from 2023-08-28 16-17-14.png";

const TableComponent = () => {

  const [ordersData, setOrdersData] = useState([]);
  const [commission, setCommission] = useState([]);
  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get(`${baseurl}/getAllOrders`)
      .then((response) => {
        // console.log(response.data.allOrders[0].image.data);
console.log(response.data.allOrders)
        // Assuming your API response is an array of orders
        setOrdersData(response.data.allOrders);

        const calculatedCommission = response.data.allOrders.map(
          (order) => (order.amount * 0.2).toFixed(2) // Assuming commission is a percentage
        );
        setCommission(calculatedCommission);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);





  return (


    <>
    <div className="text-center">
    <h1>Total Payment	</h1>
    </div>
    <div className='mt-4 table-responsive' style={{ maxHeight: '60vh', overflowY: 'auto' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Name</th>
            <th scope="col">Order I'D</th>
            <th scope="col" className=" text-nowrap ">Total Payment</th>
            <th scope="col">Commission</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData && ordersData.map((data, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className='d-flex '>
                {/* <img src={proflepic} className='rounded-4 mt-1' alt="" width='30px' height="30px" /> */}
                <p className='m-0 pt-1' >{data.username}</p>
              </td>
              <td className='text-secondary'>{data.userId}</td>
              <td><b>{data.amount}</b></td>
              <td className='text-secondary'>{commission[index]}</td>
              <td className=" text-nowrap ">{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default TableComponent;
