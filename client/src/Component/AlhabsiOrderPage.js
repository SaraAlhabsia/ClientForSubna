import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import "./Style.css";
import Navigate from "./Navigate";
import Footer from "./Footer";
import { TiShoppingCart } from "react-icons/ti";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AlhabsiOrderPage = () => {
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

  const addToCart = (product) => {
    navigate("/cart", { state: { product } });
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
          <h1>ORDER</h1>
        </Container>
        <Container className="product-container">
          <Container className="order-container">
            <table>
              <tbody>
                <tr>
                  <td className="px-5 py-8">
                    <div className="card">
                      <img
                        src={product.pic}
                        alt={product.name}
                        width={310}
                        height={300}
                        className=""
                      />
                    </div>
                  </td>
                  <td className="px-5 py-8">
                    <div>
                      <h3>Product Name: {product.name}</h3>
                      <h3>Product Price: {product.price}</h3>
                      <h3>Required quantity :</h3>
                      <input
                        type="number"
                        id="product-quantity"
                        defaultValue="1"
                        min="1"
                      />
                    </div>
                    <TiShoppingCart
                      size={80}
                      onClick={() => addToCart(product)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default AlhabsiOrderPage;
