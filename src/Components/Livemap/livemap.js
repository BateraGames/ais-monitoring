import React, { useEffect, useState } from 'react'
import { LayersControl, Popup, Marker, useMapEvent} from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import RedMarker from '../../Assets/MarkerRed.png'
import YellowMarker from '../../Assets/MarkerYellow.png'
import Accordion from 'react-bootstrap/Accordion';
import L from 'leaflet'

const { BaseLayer, Overlay } = LayersControl;

const position = [-7.250445, 123];

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
    setMouse([e.latlng.lat.toFixed(3), e.latlng.lng.toFixed(3)])
  })
}

function LiveMap({startPos, startZoomLev}){
  const[mousePos, setMousePos] = useState([0,0]);
  const [map, setMap] = useState(null)

  return (
      <div style={{position: 'relative', height: '100%'}}>
        <div style={{position: 'relative', height: '100%', zIndex: '0'}}>
          <MapContainer style={{height: '100%'}} center={position} zoom={5} scrollWheelZoom={false}>
            <MousePosTracker setMouse={setMousePos} />
            <LayersControl position="topleft">
              <LayersControl.BaseLayer name="OpenStreetMap" checked={true}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Hybrid">
                <TileLayer
                  url="https://www.google.cn/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}"
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Google Maps">
                <TileLayer
                  url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Maps Satelite">
                <TileLayer
                  url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
                />
              </LayersControl.BaseLayer>

              <LayersControl.Overlay name="Marker with popup" checked={true}>
                <Marker position={position} icon={redMarker} onMouseOver={() => console.log('hover in')} onMouseOut={() => console.log('hover out')}>
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
              <div style={{background: 'rgba(155, 155, 155, 0.7)', width: '100%', height: '3vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5,}}>
                <div style={{display: 'flex', flexDirection: 'row', width: '90%', height: '100%', textAlign: 'left', gap: 5}}>
                  <div style={{display: 'flex', flexDirection: 'row', width: '50%', textAlign: 'left'}}>
                    Lat : {mousePos[0]}
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', width: '50%', textAlign: 'left'}}>
                    Lon : {mousePos[1]}
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div style={{background:'#ffffff', position: 'absolute', top: '1vh', right: '1vh', width: '20vw', height: '90vh', zIndex: '10', borderRadius: 5 }}>
          <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ship Information</Accordion.Header>
              <Accordion.Body>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Name</div>
                  <div className="card-text" style={{width: '50%'}}>: KM Nama Kapal</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>IMO / MMSI</div>
                  <div className="card-text" style={{width: '50%'}}>: -/25413</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Lat</div>
                  <div className="card-text" style={{width: '50%'}}>: 0.209</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Long</div>
                  <div className="card-text" style={{width: '50%'}}>: 110.2</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Type</div>
                  <div className="card-text" style={{width: '50%'}}>: Cargo</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Flag</div>
                  <div className="card-text" style={{width: '50%'}}>: Indonesia</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Voyage Information</Accordion.Header>
              <Accordion.Body>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Origin</div>
                  <div className="card-text" style={{width: '50%'}}>: T. Perak Surabaya</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Destination</div>
                  <div className="card-text" style={{width: '50%'}}>: T. Priok Jakarta</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>ETA</div>
                  <div className="card-text" style={{width: '50%'}}>: 03 Feb 23, 19.00</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Nearest Ships</Accordion.Header>
              <Accordion.Body>
                <div style={{display: 'flex', flexDirection: 'column', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div>1. Kapal Utama 1</div>
                  <div>2. Kapal Lain 1</div>
                  <div>3. Kapal Lain 2</div>
                  <div>4. Kapal Lain 3</div>
                  <div>5. Kapal Lain 4</div>
                  <div>6. Kapal Lain 5</div>
                  <div>7. Kapal Lain 6</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
  );
}

export default LiveMap;