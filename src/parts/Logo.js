import React from 'react';
import Button from '../elements/Button';
import ImgLogo from '../assets/images/Logo Project.png';

export default function Logo() {
  return (
    <Button href="#" type="link">
      <img src={ImgLogo} alt="Company Logo" className="navbar-logo" />
    </Button>
  );
}
