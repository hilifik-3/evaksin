import React from 'react'
import suntik from './img/suntik.svg';
import logo from './img/logo.png';
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import './../components/css/LoginStyle.css'
import FooterComponent from './../components/FooterComponent'



function login() {
  return (
    <div className="bg-light w-100 h-100">
		  <br />
		  <br />
		  <br />
		  <Container>
		  <Row>
		    <Col xs sm="6" className="text-center">
		      <img src={suntik} width="300px" className="my-4" alt=""/>
		    </Col>
		    <Col xs sm="6">
		        <div className="bg-white card shadow-sm rounded p-5">
		        <img src={logo} width="80px" className="mb-3" alt=""/>
		          <Form>
		            <Form.Group className="mb-3" controlId="formBasicEmail">
		              <Form.Label>Email address</Form.Label>
		              <Form.Control type="email" placeholder="Enter email" />
		            </Form.Group>

		            <Form.Group className="mb-3" controlId="formBasicPassword">
		              <Form.Label>Password</Form.Label>
		              <Form.Control type="password" placeholder="Password" />
		            </Form.Group>
		            <Form.Group className="mb-3" controlId="formBasicCheckbox">
		              <a href="./forgotpassword" className="pe-1">Lupa Password</a>
		            </Form.Group>
		            <br/>
		            <Button variant="primary" type="submit" className="d-inline mt-3 btn-login-page">
		              Login
		            </Button>
		            <Button variant="light" href="./daftar" className="d-inline mt-3 btn-login-page">
		              Daftar
		            </Button>
		          </Form>
		        </div>
		    </Col>
		  </Row>
		  </Container>
		  <br />
		  <FooterComponent />
		  </div>
  )
}

export default login;
