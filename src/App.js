import React, { useState, useEffect } from 'react';
import logo from './assets/full_logo.png';
import './App.css';

const useImageLoad = (src, setLoading) => {  
  const [sourceLoaded, setSourceLoaded] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoading(false);
      setSourceLoaded(src);
    }
  }, [src])

  return sourceLoaded;
}

function App() {
  const [loading, setLoading] = useState(true);
  const src = useImageLoad('./assets/marble.jpg', setLoading);

  if(loading) {
    return null;
  }
  else {
    return (
      <div className='app' style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='container'>
          <img src={logo} className='logo' alt="Emmy's Doodles Logo" />
          <h1 className='maintenanceText'>We're currently down for maintenance. Please check back for an update soon.</h1>
        </div>
      </div>
    );
  }
}

export default App;
