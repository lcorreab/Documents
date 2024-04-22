import React, { useState, useEffect } from 'react';
import ControlPanel from './ControlPanel';
import Viewer from './Viewer';

function Body(props) {

  const [bodyStyle, setBodyStyle] = useState({
    position: 'absolute',
    border: '0%',
    left: '0%',
    top: '20%',
    height: '80%',
    width: '100%',
    display: 'flex'
  });

    // Propiedades del Viewer
  const [viewerStyle, setViewerStyle] = useState({
    position: 'absolute',
    left: '21.5%',
    height: '100%',
    width: '78.5%'
  });

  // Actualiza los cambios del Viewer cuando el ControlPanel se oculta o se visualiza
  const handleToggle = (isExpanded) => {
    setViewerStyle({
      ...viewerStyle, // Mantiene los estilos existentes
      left: isExpanded ? '1.5%' : '21.5%',
      width: isExpanded ? '98.5%' : '78.5%'
    });
  };

  // Lógica para establecer el estilo del cuerpo
  useEffect(() => {
    setBodyStyle({
      ...bodyStyle,
      top: props.message ? '20%' : '13%',
      height: props.message ? '80%' : '87%'
    });
  }, [props.message]); // Este efecto se ejecuta cuando props.message cambia

  return (
    <div style={bodyStyle}>
      <ControlPanel onToggle={handleToggle} />
      <Viewer customStyle={viewerStyle} />
    </div>
  );
}

export default Body;
