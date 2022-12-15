import React from 'react';
import Button from '../elements/Button';
import ImgLogo from '../assets/images/Logo Project.png';

export default function Logo() {
  return (
    <Button className="navbar-logo" href="#" type="link">
      <img src={ImgLogo} alt="Logo" />
    </Button>
  );
}
