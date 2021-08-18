import React from 'react'
import { Container, Row, Col, Button, Breadcrumb } from 'react-bootstrap'
import './../components/css/HomeStyle.css'
import suntik from './img/suntik.svg';
import NavbarComponent from './../components/NavbarComponent'
import FooterComponent from './../components/FooterComponent'

function SyaratKetentuan() {
  return (
    <>
    <NavbarComponent />
        <div className="pt-5">
        <Breadcrumb className="container mt-5 mb-3 pt-3">
            <Breadcrumb.Item href="./">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Syarat dan Ketentuan Melakukan Vaksin</Breadcrumb.Item>
        </Breadcrumb>

        <section className="sk-section text-center">
            <div className="text-hero container">Kenali Yuk! Syarat dan Ketentuan Dalam Melakukan <b>Vaksin!</b></div>
        </section>
        <Container>
        <Row className="mt-5">
            <Col sm>
                <div className="location">Sebelum Vaksin</div>
                <ol>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ol> 
                <div className="mt-4 location">Sesudah Vaksin</div>
                <ol>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ol> 
            </Col>
            <Col sm>
                <img src={suntik} width="300px" alt="" className="float-end"/>
            </Col>
        </Row>
        <section className="py-5 second-section">
            <h3>Informasi Vaksinisasi</h3>
            <p className="my-3">Data vaksinisasi dengan terakhir update pada Sabtu, 7 Agustus 2021.</p>
            <div className="bg-primary p-2 w-25 rounded"/>
            <Row>
                <Col className="pt-3 me-1" sm>
                    <div className="pt-2 bi bi-diagram-2-fill d-inline"></div>
                    <div className="d-inline teks-2">Dosis Vaksinisasi 1</div>
                    <div className="p-3">
                        <div className="location my-3">DKI Jakarta</div>
                        <div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
                        <div className="location my-3">Tangerang</div>
                        <div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
                        <div className="location my-3">Indonesia</div>
                        <div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
                    </div>
                </Col>
                <Col className="pt-3 me-1" sm>
                    <div className="pt-2 bi bi-diagram-2-fill d-inline"></div>
                    <div className="d-inline teks-2">Dosis Vaksinisasi 2</div>
                    <div className="p-3">
                        <div className="location my-3">DKI Jakarta</div>
                        <div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
                        <div className="location my-3">Tangerang</div>
                        <div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
                        <div className="location my-3">Indonesia</div>
                        <div className="teks-3 bg-light rounded-3 p-3 d-inline-block w-100 shadow-sm">89% Penduduk Sudah Vaksin</div>
                    </div>
                </Col>
                <Col className="pt-3 me-1" sm>
                    <div className="pt-2 bi bi-diagram-2-fill d-inline"></div>
                    <div className="d-inline teks-2">Dosis Vaksinisasi 3</div>
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
        </section>
        <div className="mt-2 float-end me-4">
            <a href="./syarat-daftar">Persyaratan Daftar Vaksinisasi >></a>
        </div>
        </Container>
        </div>
        <div className="mt-5">
            <FooterComponent/>
        </div>
    </>
    )
}

export default SyaratKetentuan;
