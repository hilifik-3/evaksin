import React from 'react'
import suntik from './img/suntik.svg';
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import './../components/css/LoginStyle.css'
import FooterComponent from './../components/FooterComponent'


function Daftar() {
  return (
    <div className="w-100 h-100 container">
		  <Container>
		  <div className="px-1 teks-2 pt-5 pb-3">Daftar Vaksin</div>
		  <div className="mb-2 p-2 rounded strip"/>
		  <Form>
		  <Row>
		  <Col sm>
		    <img src={suntik} width="300px" className="my-4" alt=""/>
		  </Col>
		    <Col sm>
		            <Form.Group className="mb-2">
		              <Form.Label>Nama Lengkap</Form.Label>
		              <Form.Control type="text" placeholder="" />
		            </Form.Group>
		            <Form.Group className="mb-2">
		              <Form.Label>Nomor KTP</Form.Label>
		              <Form.Control type="number" placeholder="" />
		            </Form.Group>
		            <Form.Group className="mb-2">
		              <Form.Label>Tanggal Lahir</Form.Label>
		              <Form.Control type="date" placeholder="" />
		            </Form.Group>
		            <Form.Group className="mb-2">
		              <Form.Label>Alamat</Form.Label>
		              <Form.Control type="text" placeholder="" />
		            </Form.Group>
		            <Row>
		            	<Col>
		            		<Form.Group className="mb-2">
		              			<Form.Label>No. Rumah</Form.Label>
		              			<Form.Control type="text" placeholder="" />
		            		</Form.Group>
		            	</Col>
		            	<Col>
		            		<Form.Group className="mb-2">
		              			<Form.Label>RT</Form.Label>
		              			<Form.Control type="text" placeholder="" />
		            		</Form.Group>
		            	</Col>
		            	<Col>
		            		<Form.Group className="mb-2">
		              			<Form.Label>RW</Form.Label>
		              			<Form.Control type="text" placeholder="" />
		            		</Form.Group>
		            	</Col>
		            </Row>
		    </Col>
		    <Col sm>
		            <Row>
		            	<Col sm>
		            		<Form.Group className="mb-2">
		              			<Form.Label>Kelurahan</Form.Label>
		              			<Form.Control type="text" placeholder="" />
		            		</Form.Group>
		            	</Col>
		            	<Col sm>
		            		<Form.Group className="mb-2">
		              			<Form.Label>Kecamatan</Form.Label>
		              			<Form.Control type="text" placeholder="" />
		            		</Form.Group>
		            	</Col>
		            </Row>
		            <Row>
		            	<Col sm>
		            		<Form.Group className="mb-2">
		              			<Form.Label>Kota</Form.Label>
		              			<Form.Control type="text" placeholder="" />
		            		</Form.Group>
		            	</Col>
		            	<Col sm>
		            		<Form.Group className="mb-2">
		              			<Form.Label>Provinsi</Form.Label>
		              			<Form.Control type="text" placeholder="" />
		            		</Form.Group>
		            	</Col>
		            </Row>
		            <Form.Group className="mb-2">
		              <Form.Label>Telp</Form.Label>
		              <Form.Control type="text" placeholder="" />
		            </Form.Group>
		            <Form.Group className="mb-2">
		              <Form.Label>WhatsApp</Form.Label>
		              <Form.Control type="text" placeholder="" />
		            </Form.Group>
		            <Form.Group className="mb-2">
		              <Form.Label>Email</Form.Label>
		              <Form.Control type="text" placeholder="" />
		            </Form.Group>
		            <Button variant="primary" type="submit" className="d-inline mt-3 btn-login-page">
		              Daftar
		            </Button>
		            <Button variant="light" href="./login" className="d-inline mt-3 btn-login-page">
		              Sudah Punya Akun
		            </Button>
		    </Col>
		  </Row>
		  </Form>
		  </Container>
		  <br />
		  <FooterComponent />
		  </div>
  )
}

export default Daftar;
