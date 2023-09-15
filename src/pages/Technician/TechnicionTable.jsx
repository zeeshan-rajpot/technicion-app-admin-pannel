import React, { useState, useEffect } from "react";
import axios from "axios";

import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";
import "./technicion.css";

const TechnicionTable = () => {
  const [vendorsData, setVendorsData] = useState([]);
  const changeAccess = (id, newStatus) => {
    axios.post(`http://localhost:8000/changeAccessVendor/${id}`, { newStatus })
      .then(response => {
        // Assuming the API responds with updated data
        setVendorsData(newStatus);
      })
      .catch(error => console.error("Error changing access:", error));
  }

  useEffect(() => {
    axios.get("http://localhost:8000/getAllVendors")
      .then(response => {
        console.log(response.data.vendor);
        setVendorsData(response.data.vendor);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className='mt-4' style={{maxHeight:'82vh', overflowY:'auto'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><b> Sr.</b></th>
            <th scope="col"><b> Name</b></th>
            <th scope="col"><b>Vendor I'D</b></th>
            <th scope="col"><b> Status</b></th>
          </tr>
        </thead>
        <tbody>
          {vendorsData.map((vendor, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="d-flex imagetablehight" >
                <img src={proflepic} className="rounded-4 me-2" alt="" width="30px" height='30px' />
                <p className="m-0 text-nowrap">{vendor.firstname + " " +vendor.lastname}</p>
              </td>
              <td className="text-secondary text-nowrap">{vendor._id}</td>
              <td className="text-nowrap">
              <button
                  href="#"
                  className={`Block-btn ${vendor.access === 'Denied' ? 'denied-access' : ''}`}
                  disabled={vendor.access === "Denied"}
                  onClick={() => changeAccess(vendor._id, 'Accepted')}
                >
                  Block
                </button>
                <button
                  href="#"
                  className={` shadow unBlock-btn ${vendor.access === 'Accepted' ? 'Accepted-access' : ''}`}
                  style={{marginTop:'8px'}}
                  disabled={vendor.access === "Accepted"}
                  onClick={() => changeAccess(vendor._id, 'Denied')}
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

export default TechnicionTable;
