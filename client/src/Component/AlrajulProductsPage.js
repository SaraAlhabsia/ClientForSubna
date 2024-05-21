import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import Navigate from "./Navigate";
import Footer from "./Footer";
import logo from "../img/logo.png";
import axios from "axios";

const AlrajulProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/Alrajul')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleCardClick = (product) => {
    navigate('/AlrajulOrder', { state: { product } });
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
          <h1>Bait Alrajul PRODUCTS</h1>
        </Container>
        <Container className="product-container">
          <table>
            <tbody>
              <tr>
                {products.map((product, index) => (
                  <td key={index} className="px-2 py-5" onClick={() => handleCardClick(product)}>
                    <div className="card">
                      <img
                        src={product.pic} 
                        className="card-img-top"
                        alt={product.name}
                        width={90}
                        height={300}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default AlrajulProductsPage;

