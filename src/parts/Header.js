import React from 'react';
import Button from '../elements/Button';
import ImgLogo from '../parts/Logo';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? ' active' : '';
  };

  return (
    <header className="spacing-sm">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ImgLogo />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item${getNavLinkClass('/')}`}>
                <Button className="nav-link ml-5" type="link" href="/">
                  Beranda
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/pencarian')}`}>
                <Button className="nav-link" type="link" href="/pencarian">
                  Pencarian
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/tentang')}`}>
                <Button className="nav-link" type="link" href="/tentang">
                  Tentang
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
