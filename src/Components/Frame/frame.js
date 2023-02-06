import { Map, TileLayer, LayersControl, Marker } from "react-leaflet";
import LiveMap from "../Livemap/livemap";
import React from 'react'
import 'leaflet/dist/leaflet.css';


const { BaseLayer, Overlay } = LayersControl;

const position = [51.505, -0.09];

class Frame extends React.Component {
  render() {
    return (
        <LiveMap style={{height: '100vh'}} />
    );
  }
}

export default Frame;