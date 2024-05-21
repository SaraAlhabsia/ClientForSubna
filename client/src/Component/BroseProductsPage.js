import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import Navigate from "./Navigate";
import Footer from "./Footer";
import logo from "../img/logo.png";
import axios from "axios";



const BroseProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3002/Brose')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleCardClick = (product) => {
    navigate('/BroseOrder', { state: { product } });
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
          <h1>7 Brose PRODUCTS</h1>
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

export default BroseProductsPage;











// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import "./Style.css";
// import Navigate from "./Navigate";
// import Footer from "./Footer";
// import shoe1 from "../img/shoe1.jpeg";
// import shoe2 from "../img/shoe2.jpeg";
// import shoe3 from "../img/shoe3.jpeg";
// import bag from "../img/bag.jpeg";
// import logo from "../img/logo.png";
// import { useNavigate } from "react-router-dom";

// const BroseProductsPage = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Container className="form-container">
//         <Row>
//           <Col md={{ size: 5 }}>
//             <img src={logo} alt="logo" width={90} height={100} />
//           </Col>
//           <Col>
//             <div>
//               <Navigate />
//             </div>
//           </Col>
//         </Row>
//         <Container className="heading-container">
//           <h1>7 Brose PRODUCTS</h1>
//         </Container>
//         <Container className="product-container">
//           <table>
//             <tbody>
//               <td class="px-2 py-5">
//                 <div class="card">
//                   <img
//                     src={shoe1}
//                     class="card-img-top"
//                     alt="shoe1"
//                     width={90}
//                     height={300}
//                   />
//                 </div>
//               </td>

//               <td>
//                 <div class="card">
//                   <img
//                     src={shoe2}
//                     class="card-img-top"
//                     alt="shoe2"
//                     width={90}
//                     height={300}
//                   />
//                 </div>
//               </td>

//               <td class="px-2 py-5">
//                 <div class="card">
//                   <img
//                     src={shoe3}
//                     class="card-img-top"
//                     alt="shoe3"
//                     width={90}
//                     height={300}
//                   />
//                 </div>
//               </td>

//               <td class="px-2 py-5">
//                 <div class="card">
//                   <img
//                     src={bag}
//                     class="card-img-top"
//                     alt="Brose"
//                     width={90}
//                     height={300}
//                   />
//                 </div>
//               </td>
//             </tbody>
//           </table>
//         </Container>
//       </Container>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default BroseProductsPage;
