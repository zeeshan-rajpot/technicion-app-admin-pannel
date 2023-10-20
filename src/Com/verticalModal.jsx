import React from "react";
import { useState } from 'react';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

function MyVerticallyCenteredModal(props) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); 

  const id = localStorage.getItem("loginid");

  const handleConfirmLogout = () => {
    const id = localStorage.getItem("loginid");

    // Make a DELETE request to log out the user
    axios
      .get(`http://localhost:8000/AdminLogout/${id}`)
 
      .then((response) => {
      
        console.log(response.data.message);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: true,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          theme: "light",
        });

        // Delay the navigation to give time for the toast to appear
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      className="shadow rounded-5"
      centered
    >
      <Modal.Body>
        <div className="d-flex align-item-center justify-content-center text-center">
          <svg
            id="Logout"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            viewBox="0 0 20.78 20"
          >
            <path
              id="Logout-2"
              data-name="Logout"
              d="M4.517,20A4.482,4.482,0,0,1,0,15.56V4.45A4.493,4.493,0,0,1,4.528,0H9.492A4.48,4.48,0,0,1,14,4.44V9.23H7.9a.77.77,0,1,0,0,1.54H14v4.78A4.493,4.493,0,0,1,9.472,20ZM16.54,13.451a.773.773,0,0,1,0-1.09l1.6-1.59H14V9.23h4.14l-1.6-1.59a.773.773,0,0,1,0-1.09.764.764,0,0,1,1.09-.01l2.92,2.91a.766.766,0,0,1,.229.55.741.741,0,0,1-.229.54l-2.92,2.911a.762.762,0,0,1-1.09,0Z"
              fill="#ff7783"
            />
          </svg>

          <h3 className="m-0" style={{ fontSize: "18px", color: "#ff7783" }}>
            {" "}
            <b> Logout </b>
          </h3>
        </div>

        <h4 className="text-center pt-4 pb-2">
          Are you sure you want to logout
        </h4>
        <div className="text-center pb-4">
          <button href="#"  className="Block-btn me-3"   onClick={handleConfirmLogout}> 
            Confrim
          </button>
          <button href="#" className="shadow unBlock-btn">
            Back
          </button>
        </div>
      </Modal.Body>
    </Modal>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

    </>
  );
}

export default MyVerticallyCenteredModal;
