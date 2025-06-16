import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Add Popup to imports
import 'leaflet/dist/leaflet.css';

const FreeMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // London coordinates
      zoom={13}
      style={{ height: "400px", width: "100%",}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>Our Office</Popup> {/* Now properly imported */}
      </Marker>
    </MapContainer>
  );
};

export default FreeMap;