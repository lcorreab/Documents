import React from 'react';
import LogoBcol from './assets/imageProbe.jpg'
import LogoAdc from './assets/imageProbe.jpg'

function Header() {
  return (
    <div style={{ position: 'absolute', border: '0%', top: '0%', left: '0%', width: '100%', height: '10%', backgroundColor: 'black' }}>
      {/* Logo */}
      <img src={LogoBcol} alt="logo" style={{ position: 'absolute', top: '0%', left: '0%', height: '100%' }} />

      {/* Título de la Aplicación WEB */}
      <h1 style={{ textAlign: 'right', position: 'absolute', top: '13%', left: '40%', width: '60%', color: 'white', fontFamily: 'arial' }}>Título</h1>
      <img src={LogoAdc} alt="logo" style={{ position: 'absolute', top: '0%', left: '64%', height: '100%', width: '6%'}} />
    </div>
  );
}

export default Header;
