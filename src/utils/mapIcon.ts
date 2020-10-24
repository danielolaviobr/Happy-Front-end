import leaflet from "leaflet";
import MapMarker from "../images/map-marker.svg";

const mapIcon = leaflet.icon({
  iconUrl: MapMarker,
  iconSize: [59, 68],
  iconAnchor: [28, 68],
  popupAnchor: [170, 2],
});

export default mapIcon;
