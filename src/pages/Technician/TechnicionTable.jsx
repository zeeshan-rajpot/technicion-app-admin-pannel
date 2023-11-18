import React, { useState, useEffect } from "react";
import axios from "axios";

import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";
import "./technicion.css";
import { baseurl } from "../const";

const TechnicionTable = () => {
  const [vendorsData, setVendorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0); // Add a key to force component re-render

  const changeAccess = (id, newStatus) => {
    axios.post(`${baseurl}/changeAccessVendor/${id}`, { newStatus })
      .then(response => {
        setVendorsData(response.data.vendor);
        setRefreshKey(prevKey => prevKey + 1); // Increment the key to trigger re-render
      })
      .catch(error => console.error("Error changing access:", error));
  }

  useEffect(() => {
    axios.get(`${baseurl}/getAllVendors`)
      .then(response => {
        console.log(response.data.vendor);
        setVendorsData(response.data.vendor);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [refreshKey]); // Add refreshKey as a dependency

  const getBlobFromBuffer = (buffer) => {
    return new Blob([buffer], { type: 'image/png' });
  }


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className='mt-4' style={{maxHeight:'82vh', overflowY:'auto'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><b> Sr.</b></th>
            <th scope="col"><b> Name</b></th>
            <th scope="col"><b>Vendor I'D</b></th>
            <th scope="col"><b> Phone Number</b></th>
            <th scope="col"><b> Status</b></th>
          </tr>
        </thead>
        <tbody>
          {vendorsData && vendorsData.map((vendor, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="d-flex imagetablehight" style={{height:'48px'}} >
              {/* <img src={URL.createObjectURL(getBlobFromBuffer(vendor.image))} className="rounded-4 me-2" alt="" width="30px" height='30px' /> */}
                <p className="m-0 text-nowrap">{vendor.firstname + " " +vendor.lastname}</p>
              </td>
              <td className="text-secondary text-nowrap">{vendor._id}</td>
              <td className="text-secondary text-nowrap">{vendor.phonenumber}</td>
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
