import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Body from './Body';

function App() {
  const [dataChildren, setDataChildren] = useState(true);
  const handlerDataChildren = (data) => {
    setDataChildren(data);
  };

  return (
    <div style={{ position: 'absolute', top: '0%', left: '0%', width: '100%', height: '100%', border: '0px', backgroundColor: 'gray', overflow: 'visible' }}>
      <Header />
      <Menu expandMenu = {handlerDataChildren} />
      <Body message={dataChildren} />
    </div>
  );
}

export default App;
