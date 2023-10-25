import React, { useEffect, useState } from 'react'

import proflepic from "../../images/Screenshot from 2023-08-30 11-33-40.png";
import axios from 'axios';
import { baseurl } from '../const';
const VendorBlock = () => {

  const [vendorData, setVendorData] = useState([]);


  const handleUnblock = (id) => {
    const confirmed = window.confirm("Do you want to unblock this vendor?");
    if (confirmed) {
      axios
        .post(`${baseurl}/changeAccessVendor/${id}`)
        .then((response) => {
          alert("Vendor unblocked successfully!");
          // Handle success, maybe update the state to reflect the unblocking

          setVendorData(prevData => prevData.filter(user => user._id !== id));

        })
        .catch((error) => {
          console.error("Error unblocking vendor:", error);
        });
    }
  };


  useEffect(() => {
    axios
      .get(`${baseurl}/getAllBlockedVendors`)
      .then((response) => {

        console.log(response.data)
        setVendorData(response.data.Vendor); // Assuming the response is an array of vendors
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
      });
  }, []);


      return (
        <div className='mt-4' style={{maxHeight:'82vh' , overflowY:'auto'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><b> Sr.</b></th>
            <th scope="col"><b> Name</b></th>
            <th scope="col"><b>Home Address</b></th>
            <th scope="col"><b> Status</b></th>
          </tr>
        </thead>
        <tbody>
          {vendorData.map((vendor, index) => (
            <tr key={vendor.id}>
              <th scope="row">{index + 1}</th>
              <td className="d-flex imagetablehight" >
                <img src={proflepic} className="rounded-4 me-2" alt="" width="30px" height='30px' />
                <p className="m-0">{vendor.firstname}</p>
              </td>
              <td className="text-secondary">{vendor.city}</td>
              <td>
                <button
                  href="#"
                  className="shadow unBlock-btn"
                  onClick={() => handleUnblock(vendor._id)}
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
}

export default VendorBlock;
