import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Com/Sidebar";
import coustmerimg from "../../images/Component 607 .svg";
import vendorimg from "../../images/Component 60.svg";
import Navbar from "../../Com/Navbar";
const Notification = () => {
  return (
    <><Navbar/>
    <Container fluid>
      <Row>
        <Col sm={4} lg={2} className="border">
          <Sidebar activeTab="notification" />
        </Col>
        <Col sm={8} lg={10} className="border">
          <h5 className="mt-5">
            {" "}
            <b>Choose Customer or Vendor</b>{" "}
          </h5>
          <div>
            <img src={vendorimg} className="pe-3" />

            <img src={coustmerimg} />
          </div>

          <div>
            <h5 className="mt-5">
              {" "}
              <b>Recipient's Name or I'D</b>{" "}
            </h5>

            <input
              type="text"
              className="shadow p-3 rounded-4"
              placeholder="Type name or ID here"
              style={{ minWidth: "80%" }}
            />
            <h5 className="mt-4">
              {" "}
              <b>Author a Precise Notification Enter Your Message Below</b>{" "}
            </h5>

            <textarea
              id="txtid"
              name="txtname"
              className="shadow p-4 rounded-4"
              placeholder="Type your message here"
              style={{ border: "none", minWidth: "80%" }}
              rows="6"
            ></textarea>
          </div>

          <buttun className="Signin-btn mt-3 mb-5"> Send Notification</buttun>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Notification;
