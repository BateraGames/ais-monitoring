import { Map, TileLayer, LayersControl, Marker } from "react-leaflet";

const { BaseLayer, Overlay } = LayersControl;

const position = [51.505, -0.09];

class LiveMap extends React.Component {
  render() {
    return (
      <Map center={position} zoom={13}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
          <BaseLayer name="Satellite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            />
          </BaseLayer>
          <Overlay name="Marker">
            <Marker position={position} />
          </Overlay>
        </LayersControl>
      </Map>
    );
  }
}

export default LiveMap;