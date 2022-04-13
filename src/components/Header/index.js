import React from 'react';

const Header = ({ hotels }) => (
  <header>
    <h1>Hoteles Cartago</h1>
    { hotels.length
      ? <p>Puedes Observar: {hotels.length} hoteles en el pais</p>
      : <p> Lamentablemente no se han encontrado hoteles</p>
    }
  </header>
)

export default Header;
