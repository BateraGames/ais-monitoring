import React from 'react'
import { LayersControl, Popup, Marker} from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer';
import { FeatureGroup } from 'react-leaflet/FeatureGroup';
import { LayerGroup } from 'react-leaflet/LayerGroup';
import { Circle } from 'react-leaflet/Circle';
import { Rectangle } from 'react-leaflet/Rectangle'

const { BaseLayer, Overlay } = LayersControl;
const position = [51.505, -0.09];

class LiveMap extends React.Component {
  render() {
    return (
      <MapContainer 
      style={{height: '100vh'}} 
      center={[51.505, -0.09]} 
      zoom={13} 
      scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />  

        <LayersControl position="topleft">
          <LayersControl.Overlay name="Marker with popup">
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayersControl.Overlay>
        </LayersControl>

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default LiveMap;