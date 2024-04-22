import React, { useState } from 'react';

function Menu({expandMenu}) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  let data = menuExpanded;

  const [menuStyle, setMenuStyle] = useState({
    position: 'absolute',
    border: '0%',
    top: '10%',
    left: '0%',
    width: '100%',
    height: '10%',
    border: 'none',
    backgroundColor: '#272625',
    color: 'black',
    cursor: 'pointer',
    display: 'flex',
    overflowX: 'auto',
    overflow: 'visible',
    alignItems: 'center',
    gap: '10px',
    padding: '0 0',
    transition: 'height 0.5s' // Transición suave al cambiar el alto.
  });

  // Botón Arquitectura Especializada
  const [buttonMenuStyle, setButtonMenuStyle] = useState({
    border: 'none',
    color: 'darkslategray',
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: 'lightgray'
  });
    
  const [buttonStyle, setButtonStyle] = useState({
    position: 'absolute',
    top: '90%',
    left: '40%',
    width: '10%',
    height: '10%',
    border: 'none',
    color: 'black',
    cursor: 'pointer',
    backgroundColor: '#fdda24'
  });

  const changeStyle = () => {
    menuExpanded ? setMenuExpanded(false) : setMenuExpanded(true);
    data = menuExpanded;
    
    setMenuStyle({
      ...menuStyle,
      height: menuExpanded ? '10%' : '1%'
    })
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: '#fdda24',
      top: menuExpanded ? '90%' : '100%',
      height: menuExpanded ? '10%' : '100%'
    });
    buttonStyle;  //Recarga las nuevas propiedades del botón de visualización.

    //  Ocultar botones del menú.
    setButtonMenuStyle({
      ...buttonMenuStyle,
      display: menuExpanded ? 'block' : 'none', // Visualiza u oculta los botones del menú excepto el botón de control.
    });
    buttonMenuStyle;

    // Expandir el body (ControlPanel y el Viewer)
    expandMenu(data);
    
  };

  return (
    <div style={menuStyle}>
      <button style={buttonStyle} onClick={changeStyle}></button>
      <button style={buttonMenuStyle}>Botón de prueba</button>
      {/* Agregar más botones aquí */}
    </div>
  );
}

export default Menu;
