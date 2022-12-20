import React from 'react';
import Button from '../elements/Button';
import ImgLogo from '../parts/Logo';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? ' active' : '';
  };

  return (
    <header className="spacing-sm">
      {/* <Navbar className="navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <ImgLogo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <Nav className="navbar-nav mr-auto">
              <Nav.Link className={`nav-item${getNavLinkClass('/')}`}>
                <Button className="nav-link ml-5" type="link" href="/">
                  Beranda
                </Button>
              </Nav.Link>
              <Nav.Link
                className={`nav-item dropdown${getNavLinkClass('/dropdown')}`}
              >
                <NavDropdown title="Pencarian" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Portal Berita
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dokumen
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    URL / Link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
              <Nav.Link className={`nav-item${getNavLinkClass('/tentang')}`}>
                <Button className="nav-link" type="link" href="/tentang">
                  Tentang
                </Button>
              </Nav.Link>
            </Nav>
            <ul className="navbar-nav ml-auto">
              <Nav.Link className={`nav-item${getNavLinkClass('/masuk')}`}>
                <Button className="nav-link mr-5" type="link" href="/masuk">
                  Masuk / Daftar
                </Button>
              </Nav.Link>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar> */}
      <div className="container-fluid">
        <Navbar bg="light" expand="lg">
          <ImgLogo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav me-auto">
              <li className={`nav-item${getNavLinkClass('/')}`}>
                <Button className="nav-link" type="link" href="/">
                  Beranda
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/pencarian')}`}>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Portal Berita
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    URL / Link
                  </NavDropdown.Item>
                  <NavDropdown.Item>Dokumen</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className={`nav-item${getNavLinkClass('/tentang')}`}>
                <Button className="nav-link" type="link" href="/tentang">
                  Tentang
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass('/masuk')}`}>
                <Button className="nav-link mr-5" type="link" href="/masuk">
                  Masuk / Daftar
                </Button>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
