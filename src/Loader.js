import React, { useState } from 'react';
import './Loader.css';
function Loader() {
  const [flip, setFlip] = useState(true);
  setInterval(() => setFlip(!flip), 3000);
  return (
    <div>
      <h3 className="loadheader">{flip ? 'Loading' : 'Please Wait'}</h3>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
