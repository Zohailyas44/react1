import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import { MediaCard } from './MediaCard';
// import logo from './logo.svg';

import Room from './Room';

// import Gate from './Gate';

ReactDOM.render(
  <React.StrictMode>
    <Room></Room>
    {/* <Gate /> */}
      {/* <MediaCard title='My React App' body='This is for my assignment' imageUrl={logo} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
