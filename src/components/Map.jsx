import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to update map view smoothly
const MapUpdater = ({ position, zoom }) => {
  const map = useMap();
  map.flyTo(position, zoom, { animate: true, duration: 1.5 }); // smooth fly
  return null;
};

const MyMap = () => {
  const [position, setPosition] = useState([28.7041, 77.1025]); // default coords (Delhi)
  const zoomLevel = 13;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.log("Error fetching location:", err);
        },
        { enableHighAccuracy: true } // more precise location
      );
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  return (
    <MapContainer center={position} zoom={zoomLevel} style={{ height: "400px", width: "100%" ,borderRadius:"20px" } }>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position}>
        <Popup>Your Current Location</Popup>
      </Marker>
      <MapUpdater position={position} zoom={zoomLevel} />
    </MapContainer>
  );
};

export default MyMap;