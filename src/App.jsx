// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './Map';
import Login from './Login'; // Import your Login component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Leaflet Geoman App</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
