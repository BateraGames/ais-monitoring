import React, { useEffect, useState } from 'react'
import { LayersControl, Popup, Marker, useMapEvent} from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
// import {Icon} from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import RedMarker from '../../Assets/MarkerRed.png'
import YellowMarker from '../../Assets/MarkerYellow.png'
import L from 'leaflet'

const { BaseLayer, Overlay } = LayersControl;

const position = [-7.250445, 112.768845];

const redMarker = new L.Icon({
  iconUrl: RedMarker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const yellowMaker = new L.Icon({
  iconUrl: YellowMarker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MousePosTracker({setMouse}) {
  const map = useMapEvent('mousemove', (e) => {
    setMouse([e.latlng.lat.toFixed(8), e.latlng.lng.toFixed(8)])
  })
}

function LiveMap({startPos, startZoomLev}){
  const[mousePos, setMousePos] = useState([0,0]);
  const [map, setMap] = useState(null)

  return (
      <div style={{position: 'relative', height: '100%'}}>
        <div style={{position: 'relative', height: '100%', zIndex: '0'}}>
          <MapContainer style={{height: '100%'}} center={position} zoom={13} scrollWheelZoom={false}>
            <MousePosTracker setMouse={setMousePos} />
            <LayersControl position="topleft">
              <LayersControl.BaseLayer name="OpenStreetMap" checked={true}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Vector">
                <TileLayer
                  url="https://tiles.openseamap.org/{z}/{x}/{y}.png"
                  attribution='Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Satelite">
                <TileLayer
                  url="https://tiles.openseamap.org/{z}/{x}/{y}.png"
                  attribution='Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Hybrid">
                <TileLayer
                  url="https://tiles.openseamap.org/{z}/{x}/{y}.png"
                  attribution='Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
                />
              </LayersControl.BaseLayer>

              <LayersControl.Overlay name="Marker with popup" checked={true}>
                <Marker position={position} icon={redMarker}>
                  <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
              </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>
        <div style={{position: 'absolute', bottom: '2vh', left: '2vh', width: '20vw', zIndex: '10' }}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <div className="card">
                  <div className="card-header">KM Abusamah</div>
                  <div className="card-body">
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>IMO / MMSI</div>
                      <div className="card-text" style={{width: '50%'}}>: -/25413</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>GT</div>
                      <div className="card-text" style={{width: '50%'}}>: 39941</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>DWT</div>
                      <div className="card-text" style={{width: '50%'}}>: 50476</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>Flag</div>
                      <div className="card-text" style={{width: '50%'}}>: Indonesia</div>
                    </div>
                  </div>
                </div>
              <div style={{background: 'rgba(155, 155, 155, 0.7)', width: '100%', height: '3vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', width: '90%', height: '100%', textAlign: 'left', gap: 5}}>
                      <div style={{display: 'flex', flexDirection: 'row', width: '50%', textAlign: 'left'}}>
                        Lat : {mousePos[0]}
                      </div>
                      <div style={{display: 'flex', flexDirection: 'row', width: '50%', textAlign: 'left'}}>
                        Long : {mousePos[1]}
                      </div>
                    </div>
                 
              </div>
            </div>
        </div>
      </div>
  );
}

export default LiveMap;