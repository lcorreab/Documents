import React from 'react';

function Viewer({ customStyle }) {
  return (
    <div style={{ ...customStyle, border: '0%', backgroundColor: '#424242' }}>
      {/* Contenido del Viewer aquí */}
    </div>
  );
}

export default Viewer;

