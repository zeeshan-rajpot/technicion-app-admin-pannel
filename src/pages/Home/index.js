import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Com/Sidebar";
import './Home.css'
import axios from "axios";
import Payment from "../Payment";
import Navbar from "../../Com/Navbar"
import pay from "../../images/pay-money-icon.svg";
import Bag from '../../images/Iconly-Bold-Bag 2.svg'
import Order from "../Order Tab";
import Technicion from "../Technician";
import Customers from "../Customer";
import custmer from '../../images/customers.svg'
import tool from '../../images/tools-icon.svg'

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [activeTab, setActiveTab] = useState();
  const [loginid, setLogInid] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("loginid");
    console.log(id)
  
      
      // console.log(idAsInt)
      setLogInid(id);


      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);
  
      // Clear timeout on component cleanup
      return () => clearTimeout(timeout);
 
  }, []);




  
  useEffect(() => {
    if (loginid) {
      axios
        .get(`http://localhost:8000/AdminGetInfo/${loginid}`)
        .then((response) => {
          console.log(response.data.Admin.name)
          // Set the user data in the state
          setUserData(response.data.Admin);
        })
        .catch((error) => console.error("Error fetching user info:", error));
    }
  }, [loginid]);

  const tabData = [
    { label: "Payment", icon: pay, component: <Payment /> },
    { label: "Order", icon: Bag, component: <Order /> },
    { label: "Technician", icon: tool, component: <Technicion /> },
    { label: "Customer", icon: custmer, component: <Customers /> },
  ];

  const showComponent = (tabLabel) => {
    const selectedTab = tabData.find(tab => tab.label === tabLabel);
    setCurrentComponent(selectedTab.component);
    setActiveTab(tabLabel);
  };

  if (isLoading) {
    return <>Loadissng...</>;
  }


  return (
    <>
    <Navbar/>
      <Container fluid>
        <Row>
          <Col sm={4} lg={2} className="border">
            <Sidebar activeTab="home" />
          </Col>
          <Col sm={8} lg={5} className="border">
            <h1 className="mt-5">
            <b> Hello , {userData ? userData.name : null} </b>
            </h1>
            <p className="text-secondary">
              Welcome to the control Center , where insight meet action
            </p>
            
            {tabData.map(tab => (
              <div
                key={tab.label}
                onClick={() => showComponent(tab.label)}
                className={`mt-3 d-flex align-item-center justify-content-center ${activeTab === tab.label ? "active-text" : ""}`}
                style={{ alignItems: "center", height: "82px", width: "100%" }}
              >
                <div
                  className={`shadow ${activeTab === tab.label ? "active-tab" : ""}`}
                  style={{
                    borderRadius: "20px 0px 0px 20px",
                    padding: "22px 12px 19px 10px",
                    width: "14%",
                    height:'100%'
                  }}
                >
                  {tab.icon ? (
                    <img src={tab.icon} className={`imgsizehome ${activeTab === tab.label ? "active-img" : ""}`} alt={`${tab.label} Icon`} />
                  ) : null}
                </div>
                <div
                  className={`d-flex align-item-center justify-content-center flex-column ms-2 shadow ps-2  ${activeTab === tab.label ? "active-background" : ""}`}
                  style={{
                    borderRadius: "0px 20px 20px 0px",
                    width: "70%",
                    padding: "17px 10px 16px 23px",
                  }}
                >
                  <p className="m-0"><b>{tab.label}</b></p>
                  <p className="m-0">Active 20+</p>
                </div>
              </div>
            ))}
            
          </Col>
          <Col lg={5}>{currentComponent}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
