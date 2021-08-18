import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './../components/css/HomeStyle.css'
import covid from './img/covid.svg';
import hero from './img/hero.svg';
import NavbarComponent from './../components/NavbarComponent'
import FooterComponent from './../components/FooterComponent'

function Home(props) {
  return (
    <>
    <NavbarComponent />
    	<section className="py-5 mb-5 first-section">
    	<Container>
      		<Row className="mt-5">
            	<Col xs sm="6" className="mt-4">
              		<div className="mt-5 text-primary bl-text">Selamat Datang Di</div>
              			<h2 className="py-3">Sistem Vaksinisasi Jakarta Barat-Tangerang</h2>
              				<p className="">Media untuk memberekian informasi mengenai vaksinisasi wilayah Jakarta Barat-Tangerang dan sekitarnya. Wujudkan masyarakat yang sehat dan produktif, Lindungi diri anda serta jaga kesehatan keluarga dengan </p>
              				<br/>
              			<b className="bg-light rounded p-2 mt-3 d-inline">#VAKSINCOVID-19</b>
              		<Button variant="primary" className="mx-3 d-inline">Ketahui Lebih Lanjut</Button>
             	</Col>
              	<Col xs sm="6">
              		<img src={hero} alt="" width="420px" className="mt-4 float-end"/>
              	</Col>
            </Row>
            <br/>
            <br/>
            <br/>
            </Container>

        </section>
        <Container>
        <section className="py-5 second-section">
        	<h3>Informasi Vaksinisasi</h3>
        	<p className="my-3">Data vaksinisasi dengan terakhir update pada Sabtu, 7 Agustus 2021.</p>
        	<div className="bg-primary p-2 w-25 rounded"/>
        	<Row>
            	<Col className="pt-3 me-5" sm>
            		<div className="pt-2 bi bi-diagram-2-fill d-inline"></div>
            		<div className="d-inline teks-2">Dosis Pertama</div>
            		<div className="p-3">
            			<div className="location my-3">DKI Jakarta</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            			<div className="location my-3">Tangerang</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            			<div className="location my-3">Indonesia</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            		</div>
            	</Col>
            	<Col className="pt-3 me-5" sm>
            	    <div className="pt-2 bi bi-diagram-2-fill d-inline"></div>
            		<div className="d-inline teks-2">Dosis Kedua</div>
            		<div className="p-3">
            			<div className="location my-3">DKI Jakarta</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            			<div className="location my-3">Tangerang</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            			<div className="location my-3">Indonesia</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            		</div>
            	</Col>
            	<Col className="pt-3 me-5" sm>
            	    <div className="pt-2 bi bi-diagram-2-fill d-inline"></div>
            		<div className="d-inline teks-2">Dosis Ketiga</div>
            		<div className="p-3">
            			<div className="location my-3">DKI Jakarta</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            			<div className="location my-3">Tangerang</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            			<div className="location my-3">Indonesia</div>
            			<div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
            		</div>
            	</Col>
            </Row>
            <Row>
            	<Col md="auto" className="pt-3 me-5">
            		<div className="teks-2 mt-5">#VAKSINKUY</div>
            		<Row>
            			<Col sm>
            				<img src={covid} width="350px;" alt="" className="float-start"/>
            			</Col>
            			<Col sm>
            				<div className="rounded px-3 py-1 my-2 d-inline-block shadow-sm w-100">
            					<a href="./syarat-dan-ketentuan" className="hrefFromHome text-dark text-center m-2">Ketahui, Syarat-Syarat Sebelum Dan Sesudah Melakukan Vaksin Covid-19</a>
            				</div>
            				<div className="rounded px-3 py-1 my-2 d-inline-block shadow-sm w-100">
            					<p className="text-dark text-center m-2">Temukan Lokasi/Pos Vaksinisasi Terdekat</p>
            				</div>
            				<div className="rounded px-3 py-1 my-2 d-inline-block shadow-sm w-100">
            					<p className="text-dark text-center m-2">Hoax Booster Covid-19</p>
            				</div>
                            <Row>
                                <Col sm>
            				        <Button variant="primary" className="my-1 py-3 login-btns w-100" href="./daftar">Baru Mendaftar</Button>
                                </Col>
                                <Col sm>
            				        <Button variant="light" className="my-1 login-btns py-3 w-100" href="./login">Sudah Punya Akun</Button>
                                </Col>
                            </Row>
            			</Col>
            		</Row>
            	</Col>
           </Row>
        </section>
    </Container>
    <FooterComponent/>
    </>
  )
}

export default Home;
