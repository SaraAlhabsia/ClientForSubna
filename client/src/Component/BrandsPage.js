import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Style.css";
import Navigate from "./Navigate";
import Footer from "./Footer";
import Alhabsi from "../img/Alhabsi.jpg";
import baitAlrajul from "../img/baitAlrajul.PNG";
import Brose from "../img/Brose.jpg";
import logo from "../img/logo.png";
const BrandsPage = () => {
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
        <table>
          <tbody>
            <br/>
            <br/>
            
            <td class="px-5 py-2">
              <div class="card">
                <img src={Alhabsi} class="card-img-top" alt="Alhabsi" />
                <div class="card-body">
                  <h5 class="card-title">Al-Habsi</h5>
                  <p class="card-text">
                    Al Habsi Brand specializes in selling and manufacturing
                    Omani khanjar and silverware Al Habsi compete with market
                    prices.
                  </p>
                  <br/>
                  <a href="/Alhabsi" class="button">
                    order now
                  </a>
                  <br/>
                  <br/>
                </div>
              </div>
            </td>

            <td>
              <div class="card">
                <img src={baitAlrajul} class="card-img-top" alt="baitAlrajul" />
                <div class="card-body">
                  <h5 class="card-title">Bait Alrajul</h5>
                  <p class="card-text">
                    An Omani brand specialized in designing , manufacturing
                    Musar and selling Omani cap . Your elegance is with us .
                  </p>
                  <br/>
                  <a href="/Alrajul" class="button">
                    order now
                  </a>
                  <br/>
                  <br/>
                </div>
              </div>
            </td>

            <td class="px-5 py-2">
              <div class="card">
                <img src={Brose} class="card-img-top" alt="Brose" />
                <div class="card-body">
                  <h5 class="card-title">7 Brose</h5>
                  <p class="card-text">
                    It is one of the Omani brands that is famous for selling
                    slippers for men only The best and finest slippers are with
                    us .
                  </p>
                  <br/>
                  <a href="/Brose" class="button">
                    order now
                  </a>
                  <br/>
                  <br/>
                </div>
              </div>
            </td>
          </tbody>
        </table>
      </Container>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BrandsPage;
