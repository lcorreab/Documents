import React, { useState } from 'react';
import Markdown from 'react-markdown';

function ControlPanel({ onToggle }) {
  // Inicia con el panel como "expandido" (visible)
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
    onToggle(!isExpanded); // Notifica al padre del cambio de estado.
  };

  // Estilos del botón. Cambia la posición x a 0% cuando el panel está oculto.
  const buttonStyles = {
    position: 'absolute',
    left: isExpanded ? '50%' : '100%', // Ajusta la posición x
    top: '45%',
    width: isExpanded ? '0%' : '0%',
    height: '10%',
    backgroundColor: '#fdda24', // Cambia los colores según el estado.
    color: isExpanded ? 'blue' : 'black',
    textAlign: 'right',
    border: 'none'
  };

  // Estilos del panel. Se oculta cambiando su ancho a 0% cuando está colapsado.
  const panelStyles = {
    position: 'absolute',
    top: '0%',
    width: isExpanded ? '0%' : '20%', // Reduce el ancho cuando está colapsado.
    height: '100%',
    transition: 'width 0.5s', // Transición suave al cambiar el ancho.
    backgroundColor: '#38333b'
  };


  // *******************************

// Función para manejar la selección de archivos
const handleFileSelection = async (event) => {
  const archivos = event.target.files; // Obtener los archivos seleccionados

  // Filtrar los archivos con extensión .md
  const archivosMarkdown = Array.from(archivos).filter(archivo => archivo.name.endsWith('.md'));

  for (const archivo of archivosMarkdown) {
    const contenido = await readFile(archivo); // Leer el contenido del archivo
    setMarkdownContent(contenido);
    console.log(`Contenido del archivo ${archivo.name}:`, contenido);
  }
};

// Función para leer el contenido de un archivo
const readFile = async (archivo) => {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();

    // Manejar el evento "onload" cuando se completa la lectura del archivo
    lector.onload = () => {
      resolve(lector.result); // Resolver la promesa con el contenido del archivo
    };

    // Manejar el evento "onerror" si ocurre un error durante la lectura del archivo
    lector.onerror = () => {
      reject(lector.error); // Rechazar la promesa con el error
    };

    // Leer el contenido del archivo como texto
    lector.readAsText(archivo);
  });
};

// HTML para el input de tipo "file"
const inputElement = document.createElement('input');
inputElement.type = 'file';
inputElement.addEventListener('change', handleFileSelection);
document.body.appendChild(inputElement);


  // ********************************
  return (
    <div style={{ position: 'absolute', ...panelStyles }}>
      <input type="file" multiple onChange={handleFileSelection} />
      <button style={buttonStyles} onClick={togglePanel}>
        {/* {isExpanded ? '>' : '<'} Cambia el texto del botón según el estado */}
      </button>
      {isExpanded && (
        // Contenido del panel, visible solo cuando está expandido
        <div>
          {/* Contenido del ControlPanel */}
        </div>
      )}
    </div>
  );
}

export default ControlPanel;
