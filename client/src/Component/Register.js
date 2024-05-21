import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { userSchemaValidation } from "../Validations/UserValidation";

import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";



import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Features/UserSlice";
import Footer from "./Footer";
import Navigate from "./Navigate";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const userList = useSelector((state) => state.users.value);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const dispatch = useDispatch(); //every time we want to call an action, make an action happen
  const navigate = useNavigate(); //declares a constant variable named navigate and assigns it the value returned by the useNavigate() hook.
  //For form validation using react-hook-form
  const {
    register,
    handleSubmit: submitForm, //submitForm will be called when the form is submitted
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const handleSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    dispatch(registerUser(userData));
    navigate("/");
    console.log(data);
  };

  return (
    <div>
      <Container className="form-container">
        <Row>
          <Col md={1}></Col>
          <Col md={{ size: 4 }}>
            <div>
              <br />
              <br />
              <br />
              <img src={logo} alt="logo" width={370} height={600} />
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <div>
              <Navigate />
              <br />

              <Container className="form2-cont">
                <Col style={{ textAlign: "center" }}>
                  <br />
                  <Row>
                    <h5>Register Page</h5>
                  </Row>

                  <Row>
                    <Col md="8">
                      <form className="form">
                        <FormGroup>
                          <Label for="UserName" className="smalltext">
                            User Name:
                          </Label>
                          <input
                            className="form-control"
                            id="name"
                            placeholder="User Name"
                            type="text"
                            {...register("name", {
                              value: name,
                              onChange: (e) => setname(e.target.value),
                            })}
                          />
                          <p className="error">{errors.name?.message}</p>
                        </FormGroup>

                        <FormGroup>
                          <Label for="Email" className="smalltext">
                            Email:
                          </Label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email..."
                            //value={email}
                            {...register("email", {
                              value: email,
                              onChange: (e) => setemail(e.target.value),
                            })}
                          />
                          <p className="error">{errors.email?.message}</p>
                        </FormGroup>

                        <FormGroup>
                          <Label for="Password" className="smalltext">
                            Password:
                          </Label>
                          <input
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            type="password"
                            //value={password}
                            //register this input to the react-hook
                            {...register("password", {
                              value: password,
                              onChange: (e) => setpassword(e.target.value),
                            })}
                          />
                          <p className="error">{errors.password?.message}</p>
                        </FormGroup>

                        <FormGroup>
                          <Label for="ConfirmPassword" className="smalltext">
                            Confirm Password:
                          </Label>
                          <input
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm your Password"
                            type="password"
                            {...register("confirmPassword", {
                              value: confirmPassword,
                              onChange: (e) =>
                                setconfirmPassword(e.target.value),
                            })}
                          />
                          <p className="error">
                            {errors.confirmPassword?.message}
                          </p>
                        </FormGroup>

                        <FormGroup>
                          <Button
                            className="button"
                            color="primary"
                            onClick={submitForm(handleSubmit)}
                          >
                            Submit
                          </Button>
                        </FormGroup>

                        <FormGroup>
                          <Label className="smalltext">
                            Already have an account?
                            <Link to="/login">Log in </Link>now.
                          </Label>
                        </FormGroup>
                      </form>
                    </Col>
                  </Row>
                  <Row></Row>
                </Col>
              </Container>
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

export default Register;
