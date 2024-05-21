import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import "./Style.css";
import Navigate from "./Navigate";
import Footer from "./Footer";
import logo from "../img/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/Alhabsi")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handlePayClick = () => {
    // Navigate to RegisterPage
    navigate("/payment");
  };

  return (
    <div>
      <Container className="form-container">
        <Row>
          <Col md={{ size: 5 }}>
            <img src={logo} alt="logo" width={90} height={100} />
          </Col>
          <Col>
            <div>
              <Navigate />
            </div>
          </Col>
        </Row>
        <Container className="heading-container">
          <h1>Cart</h1>
        </Container>
        <Container className="product-container">
          <Container className="order-container">
            <Row>
              <div class="card">
                <img src={product.pic} class="card-img-top" alt="baitAlrajul" />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">{product.price}</p>
                  <br />
                  <Button
                    color="dark"
                    className="home-button"
                    onClick={handlePayClick}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default CartPage;
