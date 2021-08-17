import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import './css/NavbarStyle.css'


class NavbarComponent extends React.Component {
  state = {
    navClass: "navbar navbar-expand-lg navbar-light fixed-top"
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const navClassSelection = window.scrollY < 50 ? "navbar navbar-expand-lg navbar-light fixed-top" : "navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top";

      this.setState({ navClass: navClassSelection });
    });
  }
  render() {
    return (
<>
  <Navbar expand="lg" fixed="top" className={this.state.navClass}>
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="https://akuhidayat.netlify.app/hilifik/logo.png"
          width="80px"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="pt-2">
        <Nav className="me-auto">
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="./about">About</Nav.Link>
          <Nav.Link href="./blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button className="login-btn pt-2" href="./login">Login / Register</Button>
    </Container>
  </Navbar>
</>
);
  }
}

export default NavbarComponent;