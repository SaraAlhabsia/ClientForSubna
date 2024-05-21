import React from "react";
import { Button, Container, Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Navigate from "./Navigate";
import Footer from "./Footer";
import "../Component/Style.css";
import kumma from "../img/kumma.png";
import logo from "../img/logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to LoginPage
    navigate("/login");
  };

  const handleRegisterClick = () => {
    // Navigate to RegisterPage
    navigate("/register");
  };

  return (
    <div>
      <Container className="form-container">
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <div>
              <Navigate />
            </div>
            <div>
              <img src={logo} alt="logo" width={300} height={250} />
            </div>

            <div>
              <Button
                color="dark"
                size="lg"
                className="home-button"
                onClick={handleLoginClick}
              >
                LOGIN
              </Button>
            </div>
            <br />
            <div>
              <Button
                color="dark"
                size="lg"
                className="home-button"
                onClick={handleRegisterClick}
              >
                REGISTER
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
