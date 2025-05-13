import "./Envios.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Corregir íconos rotos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});
//---
export default function Envios() {
    return (
        <div id="envios">
            <div id="infoEnvios">
                <span id="infoEnviosTitulo">envios y puntos de encuentro</span>
                <p>realizamos envios a todo el casco urbano y realizamos puntos de encuentro en las zonas marcadas los dias viernes</p>
            </div>
            <MapContainer center={[-34.9212, -57.9545]} zoom={13} id="mapa">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-34.9214, -57.9546]}>
                    <Popup>punto de encuentro</Popup>
                </Marker>
                <Marker position={[-34.9595, -57.9592]}>
                    <Popup>punto de encuentro</Popup>
                </Marker>
                <Marker position={[-34.9544, -57.9660]}>
                    <Popup>punto de encuentro</Popup>
                </Marker>
            </MapContainer>
        </div>
            
    )
}