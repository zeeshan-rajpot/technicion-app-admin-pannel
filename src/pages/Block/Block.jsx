import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../Com/Sidebar";
import CousterBlock from "./CousterBlock";
import VendorBlock from "./VendorBlock";
import Navbar from "../../Com/Navbar";

const Block = () => {
  return (
    <>
    <Navbar/>
      <Container fluid>
        <Row>
          <Col sm={2} lg={2} className="border">
            <Sidebar activeTab="Block" />
          </Col>

          <Col sm={2} lg={5}>
            <h3 className="mt-4" style={{ color: "#ff7783" }}>
              Customer Side
            </h3>
            <CousterBlock />
          </Col>
          <Col lg={5} className="border">
            <h3 className="mt-4" style={{ color: "#ff7783" }}>
              Vendor Side
            </h3>

            <VendorBlock />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Block;
