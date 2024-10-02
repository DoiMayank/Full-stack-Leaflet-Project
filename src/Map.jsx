// src/components/Map.jsx
import React, { useEffect } from 'react';
import L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You are not authenticated. Please log in.');
      navigate('/login');  // Redirect to login if not authenticated
      return; // Exit if not authenticated
    }

    // Initialize the map
    const map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add Geoman controls
    map.pm.addControls({
      position: 'topleft',
      drawCircle: false,
      drawMarker: true,
      drawPolyline: true,
      drawPolygon: true,
      editMode: true,
    });

    // Cleanup function to remove the map and its controls when the component unmounts
    return () => {
      map.pm.removeControls();
      map.remove(); // Remove the map instance
    };
  }, [navigate]);

  return <div id="map" style={{ height: '100vh' }} />;
};

export default Map;
