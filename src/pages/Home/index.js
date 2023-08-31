// import React, { useState } from "react";
// import Navbar from "../../Com/Navbar";
// import { Container, Row, Col } from "react-bootstrap";
// import Sidebar from "../../Com/Sidebar";
// // import  Payment from "../ Payment";
// import Compunent2 from "../Compunent2";
// import Compunet3 from "../Compunet3";
// import Payment from "../Payment";

// const Home = () => {
//   const [currentComponent, setCurrentComponent] = useState(null);
//   const [activeButton, setActiveButton] = useState(null);

//   const showComponent1 = (buttonName) => {
//     setCurrentComponent(< Payment />);
//     setActiveButton(buttonName);
//   };

//   const showComponent2 = () => {
//     setCurrentComponent(<Compunent2 />);
//   };

//   const showComponent3 = () => {
//     setCurrentComponent(<Compunet3 />);
//   };

//   return (
//     <>
//       <Navbar />
//       <Container fluid>
//         <Row>
//           <Col sm={4} lg={2} className="border">
//             <Sidebar />
//           </Col>
//           <Col sm={8} lg={5} className="border">
//             <h1 className="mt-5">
//               <b> Hello , David William</b>
//             </h1>
//             <p className="text-secondary">
//               Welcome to the control Center , where insight meet action
//             </p>

//             <div
//               onClick={() => showComponent1("btn1")}
//               className={`d-flex align-item-center justify-content-center ${
//                 activeButton === "btn1" ? "active-button" : "inactive-button"
//               }`}
//               style={{ alignItems: "center", height: "100px", width: "100%" }}
//             >
//               <div
//                 className="  shadow"
//                 style={{
//                   borderRadius: "20px 0px 0px 20px",
//                   padding: "17px 10px 16px 23px",
//                   width: "14%",
//                 }}
//               >
//                 {" "}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="45"
//                   height="43.756"
//                   viewBox="0 0 45 43.756"
//                 >
//                   <path
//                     id="pay-money-icon"
//                     d="M22.661,15.382A2.93,2.93,0,1,1,20,18.55,2.93,2.93,0,0,1,22.661,15.382ZM.366,1.994H4.215a.366.366,0,0,1,.366.366v9.324a.366.366,0,0,1-.366.366H.366A.366.366,0,0,1,0,11.684V2.371A.366.366,0,0,1,.366,2Zm5.189,1.67a.732.732,0,0,1,.121-.454c.245-.333.846-.234,1.227-.234a5.548,5.548,0,0,0,1.179-.092,13.758,13.758,0,0,0,1.685-.56c2.084-.732,3.86-1.208,6.031-2.161A1.674,1.674,0,0,1,17.212.155a36.874,36.874,0,0,1,5.881,2.754,2.084,2.084,0,0,1,.875.868c1.2,1.75,2.234,3.523,3.226,5.3a1.723,1.723,0,0,1,.242,1.586c-.93,1.527-2.6-.645-4.395-2.091-.758-.608-1.791-1.15-2.677-1.765a13.9,13.9,0,0,0-2.893-1.187c-1.875-.161-2.029,2.531.436,2.629,1.674.066,5.127,1.582,6.086,2.977.9,1.3.406,2.585-1.432,2.538l-1.538-.286a8.835,8.835,0,0,0-4.929-.081,11.486,11.486,0,0,1-4.215.256,4.388,4.388,0,0,1-2.076-1.1,6.958,6.958,0,0,0-1.234-.835,4.523,4.523,0,0,0-1.121-.476c-.586-.139-1.41.059-1.754-.447a.948.948,0,0,1-.139-.5ZM45,30.448H39.294V41.486H45V30.448ZM38.042,40.559V31.335H33.9a15.55,15.55,0,0,0-5.277,2.377H25.4c-1.465.088-2.223,1.564-.8,2.538,1.128.828,2.618.78,4.149.645a.694.694,0,1,1,0,1.37c-.366.029-.8-.062-1.161-.062-1.908,0-3.475-.366-4.438-1.871L22.661,35.2l-4.794-2.377c-2.4-.787-4.1,1.721-2.336,3.464a62.835,62.835,0,0,0,10.675,6.284,7.235,7.235,0,0,0,7.936,0l3.9-2.014ZM28.978,9.889l9.474,14.575L27.583,31.342l-.93-1.432L34.424,25l.1-.062A1.611,1.611,0,0,0,35,22.707l-.447-.688h.022l-2.157-3.274-4.288-6.592a3.618,3.618,0,0,0,.549-.71h0A2.336,2.336,0,0,0,28.978,9.889ZM27,12.709,34.142,23.7,23.276,30.58,13.293,15.2c.278,0,.553-.022.828-.048.472-.044.93-.11,1.373-.187L22.76,26a1.9,1.9,0,0,1,2.622.59l4.281-2.732a1.9,1.9,0,0,1,.6-2.618l-4.83-7.324c.022-.029.04-.062.059-.092a1.327,1.327,0,0,0,.073-.121,2.64,2.64,0,0,0,.3-1.165A2.413,2.413,0,0,0,27,12.709Z"
//                     transform="translate(0 -0.002)"
//                     fill="#000"
//                     fill-rule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div
//                 className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
//                 style={{
//                   borderRadius: "0px 20px 20px 0px",
//                   width: "70%",
//                   padding: "17px 10px 16px 23px",
//                 }}
//               >
//                 {" "}
//                 <p className="m-0">Payment</p>
//                 <p className="m-0">Active 20+</p>{" "}
//               </div>
//             </div>

//             <div
//               onClick={showComponent2}
//               className="d-flex align-item-center justify-content-center "
//               style={{ alignItems: "center", height: "100px", width: "100%" }}
//             >
//               <div
//                 className="  shadow"
//                 style={{
//                   borderRadius: "20px 0px 0px 20px",
//                   padding: "17px 10px 16px 23px",
//                   width: "14%",
//                 }}
//               >
//                 {" "}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="45"
//                   height="43.756"
//                   viewBox="0 0 45 43.756"
//                 >
//                   <path
//                     id="pay-money-icon"
//                     d="M22.661,15.382A2.93,2.93,0,1,1,20,18.55,2.93,2.93,0,0,1,22.661,15.382ZM.366,1.994H4.215a.366.366,0,0,1,.366.366v9.324a.366.366,0,0,1-.366.366H.366A.366.366,0,0,1,0,11.684V2.371A.366.366,0,0,1,.366,2Zm5.189,1.67a.732.732,0,0,1,.121-.454c.245-.333.846-.234,1.227-.234a5.548,5.548,0,0,0,1.179-.092,13.758,13.758,0,0,0,1.685-.56c2.084-.732,3.86-1.208,6.031-2.161A1.674,1.674,0,0,1,17.212.155a36.874,36.874,0,0,1,5.881,2.754,2.084,2.084,0,0,1,.875.868c1.2,1.75,2.234,3.523,3.226,5.3a1.723,1.723,0,0,1,.242,1.586c-.93,1.527-2.6-.645-4.395-2.091-.758-.608-1.791-1.15-2.677-1.765a13.9,13.9,0,0,0-2.893-1.187c-1.875-.161-2.029,2.531.436,2.629,1.674.066,5.127,1.582,6.086,2.977.9,1.3.406,2.585-1.432,2.538l-1.538-.286a8.835,8.835,0,0,0-4.929-.081,11.486,11.486,0,0,1-4.215.256,4.388,4.388,0,0,1-2.076-1.1,6.958,6.958,0,0,0-1.234-.835,4.523,4.523,0,0,0-1.121-.476c-.586-.139-1.41.059-1.754-.447a.948.948,0,0,1-.139-.5ZM45,30.448H39.294V41.486H45V30.448ZM38.042,40.559V31.335H33.9a15.55,15.55,0,0,0-5.277,2.377H25.4c-1.465.088-2.223,1.564-.8,2.538,1.128.828,2.618.78,4.149.645a.694.694,0,1,1,0,1.37c-.366.029-.8-.062-1.161-.062-1.908,0-3.475-.366-4.438-1.871L22.661,35.2l-4.794-2.377c-2.4-.787-4.1,1.721-2.336,3.464a62.835,62.835,0,0,0,10.675,6.284,7.235,7.235,0,0,0,7.936,0l3.9-2.014ZM28.978,9.889l9.474,14.575L27.583,31.342l-.93-1.432L34.424,25l.1-.062A1.611,1.611,0,0,0,35,22.707l-.447-.688h.022l-2.157-3.274-4.288-6.592a3.618,3.618,0,0,0,.549-.71h0A2.336,2.336,0,0,0,28.978,9.889ZM27,12.709,34.142,23.7,23.276,30.58,13.293,15.2c.278,0,.553-.022.828-.048.472-.044.93-.11,1.373-.187L22.76,26a1.9,1.9,0,0,1,2.622.59l4.281-2.732a1.9,1.9,0,0,1,.6-2.618l-4.83-7.324c.022-.029.04-.062.059-.092a1.327,1.327,0,0,0,.073-.121,2.64,2.64,0,0,0,.3-1.165A2.413,2.413,0,0,0,27,12.709Z"
//                     transform="translate(0 -0.002)"
//                     fill="#000"
//                     fill-rule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div
//                 className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
//                 style={{
//                   borderRadius: "0px 20px 20px 0px",
//                   width: "70%",
//                   padding: "17px 10px 16px 23px",
//                 }}
//               >
//                 {" "}
//                 <p className="m-0">Orders</p>
//                 <p className="m-0">Active 20+</p>{" "}
//               </div>
//             </div>

//             <div
//               onClick={showComponent3}
//               className="d-flex align-item-center justify-content-center "
//               style={{ alignItems: "center", height: "100px", width: "100%" }}
//             >
//               <div
//                 className=" shadow"
//                 style={{
//                   borderRadius: "20px 0px 0px 20px",
//                   padding: "17px 10px 16px 23px",
//                   width: "14%",
//                 }}
//               >
//                 {" "}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="45"
//                   height="37.309"
//                   viewBox="0 0 45 37.309"
//                 >
//                   <g id="tools-icon" transform="translate(0)">
//                     <path
//                       id="Path_23276"
//                       data-name="Path 23276"
//                       d="M23.586,4.447a8.281,8.281,0,0,0-3.031-.581,5.285,5.285,0,0,0-3.866,1.5L7.971,14.072l.907.915L5.568,18.321,0,12.744,3.309,9.434l1.026,1,8.671-8.663A5.393,5.393,0,0,1,16.848,0Q20.3,0,23.586,4.447ZM36.817,1.98a8.171,8.171,0,0,1,2.7.458L37.37,4.767c-4.887,5.287.628,8.346,5.488,4.716l1.875-1.4a8.186,8.186,0,0,1-11.969,9.19L28.79,21.493,40.013,32.234l-5.075,5.075Q29.63,31.773,24.325,26.234l-6.968,7.4a3.05,3.05,0,1,1-5-3.459l0,0,.027-.023a3.069,3.069,0,0,1,.781-.669l7.837-6.719L11.331,12.636l4.01-4.009C19.06,12.2,22.08,15.065,25.8,18.633l4.345-3.725A8.184,8.184,0,0,1,36.817,1.98ZM10.485,3.795,6.5,7.78l-.764-.764L9.721,3.031l.764.764Z"
//                       transform="translate(0)"
//                       fill="#ff7783"
//                       fill-rule="evenodd"
//                     />
//                   </g>
//                 </svg>
//               </div>
//               <div
//                 className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
//                 style={{
//                   borderRadius: "0px 20px 20px 0px",
//                   width: "70%",
//                   padding: "17px 10px 16px 23px",
//                 }}
//               >
//                 {" "}
//                 <p className="m-0">Technicion</p>
//                 <p className="m-0">Active 20+</p>{" "}
//               </div>
//             </div>

//             <div
//               onClick={showComponent1}
//               className="d-flex align-item-center justify-content-center "
//               style={{ alignItems: "center", height: "100px", width: "100%" }}
//             >
//               <div
//                 className="  shadow"
//                 style={{
//                   borderRadius: "20px 0px 0px 20px",
//                   padding: "17px 10px 16px 23px",
//                   width: "14%",
//                 }}
//               >
//                 {" "}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="45"
//                   height="43.756"
//                   viewBox="0 0 45 43.756"
//                 >
//                   <path
//                     id="pay-money-icon"
//                     d="M22.661,15.382A2.93,2.93,0,1,1,20,18.55,2.93,2.93,0,0,1,22.661,15.382ZM.366,1.994H4.215a.366.366,0,0,1,.366.366v9.324a.366.366,0,0,1-.366.366H.366A.366.366,0,0,1,0,11.684V2.371A.366.366,0,0,1,.366,2Zm5.189,1.67a.732.732,0,0,1,.121-.454c.245-.333.846-.234,1.227-.234a5.548,5.548,0,0,0,1.179-.092,13.758,13.758,0,0,0,1.685-.56c2.084-.732,3.86-1.208,6.031-2.161A1.674,1.674,0,0,1,17.212.155a36.874,36.874,0,0,1,5.881,2.754,2.084,2.084,0,0,1,.875.868c1.2,1.75,2.234,3.523,3.226,5.3a1.723,1.723,0,0,1,.242,1.586c-.93,1.527-2.6-.645-4.395-2.091-.758-.608-1.791-1.15-2.677-1.765a13.9,13.9,0,0,0-2.893-1.187c-1.875-.161-2.029,2.531.436,2.629,1.674.066,5.127,1.582,6.086,2.977.9,1.3.406,2.585-1.432,2.538l-1.538-.286a8.835,8.835,0,0,0-4.929-.081,11.486,11.486,0,0,1-4.215.256,4.388,4.388,0,0,1-2.076-1.1,6.958,6.958,0,0,0-1.234-.835,4.523,4.523,0,0,0-1.121-.476c-.586-.139-1.41.059-1.754-.447a.948.948,0,0,1-.139-.5ZM45,30.448H39.294V41.486H45V30.448ZM38.042,40.559V31.335H33.9a15.55,15.55,0,0,0-5.277,2.377H25.4c-1.465.088-2.223,1.564-.8,2.538,1.128.828,2.618.78,4.149.645a.694.694,0,1,1,0,1.37c-.366.029-.8-.062-1.161-.062-1.908,0-3.475-.366-4.438-1.871L22.661,35.2l-4.794-2.377c-2.4-.787-4.1,1.721-2.336,3.464a62.835,62.835,0,0,0,10.675,6.284,7.235,7.235,0,0,0,7.936,0l3.9-2.014ZM28.978,9.889l9.474,14.575L27.583,31.342l-.93-1.432L34.424,25l.1-.062A1.611,1.611,0,0,0,35,22.707l-.447-.688h.022l-2.157-3.274-4.288-6.592a3.618,3.618,0,0,0,.549-.71h0A2.336,2.336,0,0,0,28.978,9.889ZM27,12.709,34.142,23.7,23.276,30.58,13.293,15.2c.278,0,.553-.022.828-.048.472-.044.93-.11,1.373-.187L22.76,26a1.9,1.9,0,0,1,2.622.59l4.281-2.732a1.9,1.9,0,0,1,.6-2.618l-4.83-7.324c.022-.029.04-.062.059-.092a1.327,1.327,0,0,0,.073-.121,2.64,2.64,0,0,0,.3-1.165A2.413,2.413,0,0,0,27,12.709Z"
//                     transform="translate(0 -0.002)"
//                     fill="#000"
//                     fill-rule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div
//                 className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
//                 style={{
//                   borderRadius: "0px 20px 20px 0px",
//                   width: "70%",
//                   padding: "17px 10px 16px 23px",
//                 }}
//               >
//                 {" "}
//                 <p className="m-0">Customer</p>
//                 <p className="m-0">Active 20+</p>{" "}
//               </div>
//             </div>
//           </Col>
//           <Col lg={5}>{currentComponent}</Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Navbar from "../../Com/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Com/Sidebar";

import Payment from "../Payment";
import paymenticon from "../../images/pay-money-icon.svg";
import Bag from '../../images/Iconly-Bold-Bag 2.svg'
import Order from "../Order Tab";
import Technicion from "../Technician";
import Customers from "../Customer";
import custmer from '../../images/customers.svg'

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [activeTab, setActiveTab] = useState("Payment");

  const showComponent1 = () => {
    setCurrentComponent(<Payment />);
  };

  const showComponent2 = () => {
    setCurrentComponent(<Order />);
  };

  const showComponent3 = () => {
    setCurrentComponent(<Technicion />);
  };

  const showComponent4 = () => {
    setCurrentComponent(<Customers />);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Container fluid>
        <Row>
          <Col sm={4} lg={2} className="border">
            <Sidebar activeTab="home" />
          </Col>
          <Col sm={8} lg={5} className="border">
            <h1 className="mt-5">
              <b> Hello , David William</b>
            </h1>
            <p className="text-secondary">
              Welcome to the control Center , where insight meet action
            </p>

            <div
              onClick={showComponent1}
              className="d-flex align-item-center justify-content-center "
              style={{ alignItems: "center", height: "100px", width: "100%" }}
            >
              <div
                className={`shadow ${
                  activeTab === "Payment" ? "active-tabbbb" : ""
                }`}
                onClick={() => setActiveTab("Payment")}
                style={{
                  borderRadius: "20px 0px 0px 20px",
                  padding: "17px 10px 16px 23px",
                  width: "14%",
                }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ff7783"
                  width="45"
                  height="43.756"
                  viewBox="0 0 45 43.756"
                >
                  <path
                    id="pay-money-icon"
                    d="M22.661,15.382A2.93,2.93,0,1,1,20,18.55,2.93,2.93,0,0,1,22.661,15.382ZM.366,1.994H4.215a.366.366,0,0,1,.366.366v9.324a.366.366,0,0,1-.366.366H.366A.366.366,0,0,1,0,11.684V2.371A.366.366,0,0,1,.366,2Zm5.189,1.67a.732.732,0,0,1,.121-.454c.245-.333.846-.234,1.227-.234a5.548,5.548,0,0,0,1.179-.092,13.758,13.758,0,0,0,1.685-.56c2.084-.732,3.86-1.208,6.031-2.161A1.674,1.674,0,0,1,17.212.155a36.874,36.874,0,0,1,5.881,2.754,2.084,2.084,0,0,1,.875.868c1.2,1.75,2.234,3.523,3.226,5.3a1.723,1.723,0,0,1,.242,1.586c-.93,1.527-2.6-.645-4.395-2.091-.758-.608-1.791-1.15-2.677-1.765a13.9,13.9,0,0,0-2.893-1.187c-1.875-.161-2.029,2.531.436,2.629,1.674.066,5.127,1.582,6.086,2.977.9,1.3.406,2.585-1.432,2.538l-1.538-.286a8.835,8.835,0,0,0-4.929-.081,11.486,11.486,0,0,1-4.215.256,4.388,4.388,0,0,1-2.076-1.1,6.958,6.958,0,0,0-1.234-.835,4.523,4.523,0,0,0-1.121-.476c-.586-.139-1.41.059-1.754-.447a.948.948,0,0,1-.139-.5ZM45,30.448H39.294V41.486H45V30.448ZM38.042,40.559V31.335H33.9a15.55,15.55,0,0,0-5.277,2.377H25.4c-1.465.088-2.223,1.564-.8,2.538,1.128.828,2.618.78,4.149.645a.694.694,0,1,1,0,1.37c-.366.029-.8-.062-1.161-.062-1.908,0-3.475-.366-4.438-1.871L22.661,35.2l-4.794-2.377c-2.4-.787-4.1,1.721-2.336,3.464a62.835,62.835,0,0,0,10.675,6.284,7.235,7.235,0,0,0,7.936,0l3.9-2.014ZM28.978,9.889l9.474,14.575L27.583,31.342l-.93-1.432L34.424,25l.1-.062A1.611,1.611,0,0,0,35,22.707l-.447-.688h.022l-2.157-3.274-4.288-6.592a3.618,3.618,0,0,0,.549-.71h0A2.336,2.336,0,0,0,28.978,9.889ZM27,12.709,34.142,23.7,23.276,30.58,13.293,15.2c.278,0,.553-.022.828-.048.472-.044.93-.11,1.373-.187L22.76,26a1.9,1.9,0,0,1,2.622.59l4.281-2.732a1.9,1.9,0,0,1,.6-2.618l-4.83-7.324c.022-.029.04-.062.059-.092a1.327,1.327,0,0,0,.073-.121,2.64,2.64,0,0,0,.3-1.165A2.413,2.413,0,0,0,27,12.709Z"
                    transform="translate(0 -0.002)"
                    fill="#ff7783"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
                style={{
                  borderRadius: "0px 20px 20px 0px",
                  width: "70%",
                  padding: "17px 10px 16px 23px",
                }}
              >
                {" "}
                <p
                  className={` m-0 text-secondary ${
                    activeTab === "Payment" ? "active-tabbbb" : ""
                  }`}
                >
                  Payment
                </p>
                <p className="m-0">Active 20+</p>{" "}
              </div>
            </div>

            <div
              onClick={showComponent2}
              className="d-flex align-item-center justify-content-center "
              style={{ alignItems: "center", height: "100px", width: "100%" }}
            >
              <div
                className="  shadow"
                style={{
                  borderRadius: "20px 0px 0px 20px",
                  padding: "17px 10px 16px 23px",
                  width: "14%",
                }}
              >
                {" "}
    <img src={Bag}/>
              </div>
              <div
                className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
                style={{
                  borderRadius: "0px 20px 20px 0px",
                  width: "70%",
                  padding: "17px 10px 16px 23px",
                }}
              >
                {" "}
                <p className="m-0">Orders</p>
                <p className="m-0">Active 20+</p>{" "}
              </div>
            </div>

            <div
              onClick={showComponent3}
              className="d-flex align-item-center justify-content-center "
              style={{ alignItems: "center", height: "100px", width: "100%" }}
            >
              <div
                className=" shadow"
                style={{
                  borderRadius: "20px 0px 0px 20px",
                  padding: "17px 10px 16px 23px",
                  width: "14%",
                }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="37.309"
                  viewBox="0 0 45 37.309"
                >
                  <g id="tools-icon" transform="translate(0)">
                    <path
                      id="Path_23276"
                      data-name="Path 23276"
                      d="M23.586,4.447a8.281,8.281,0,0,0-3.031-.581,5.285,5.285,0,0,0-3.866,1.5L7.971,14.072l.907.915L5.568,18.321,0,12.744,3.309,9.434l1.026,1,8.671-8.663A5.393,5.393,0,0,1,16.848,0Q20.3,0,23.586,4.447ZM36.817,1.98a8.171,8.171,0,0,1,2.7.458L37.37,4.767c-4.887,5.287.628,8.346,5.488,4.716l1.875-1.4a8.186,8.186,0,0,1-11.969,9.19L28.79,21.493,40.013,32.234l-5.075,5.075Q29.63,31.773,24.325,26.234l-6.968,7.4a3.05,3.05,0,1,1-5-3.459l0,0,.027-.023a3.069,3.069,0,0,1,.781-.669l7.837-6.719L11.331,12.636l4.01-4.009C19.06,12.2,22.08,15.065,25.8,18.633l4.345-3.725A8.184,8.184,0,0,1,36.817,1.98ZM10.485,3.795,6.5,7.78l-.764-.764L9.721,3.031l.764.764Z"
                      transform="translate(0)"
                      fill="#ff7783"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </div>
              <div
                className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
                style={{
                  borderRadius: "0px 20px 20px 0px",
                  width: "70%",
                  padding: "17px 10px 16px 23px",
                }}
              >
                {" "}
                <p className="m-0">Technicion</p>
                <p className="m-0">Active 20+</p>{" "}
              </div>
            </div>

            <div
              onClick={showComponent4}
              className="d-flex align-item-center justify-content-center "
              style={{ alignItems: "center", height: "100px", width: "100%" }}
            >
              <div
                className="  shadow"
                style={{
                  borderRadius: "20px 0px 0px 20px",
                  padding: "17px 10px 16px 23px",
                  width: "14%",
                }}
              >
                {" "}
             <img src={custmer}/>
              </div>
              <div
                className="d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2"
                style={{
                  borderRadius: "0px 20px 20px 0px",
                  width: "70%",
                  padding: "17px 10px 16px 23px",
                }}
              >
                {" "}
                <p className="m-0">Customer</p>
                <p className="m-0">Active 20+</p>{" "}
              </div>
            </div>
          </Col>
          <Col lg={5}>{currentComponent}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
