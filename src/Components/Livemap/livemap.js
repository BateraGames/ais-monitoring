import React, { useEffect, useState, useRef } from 'react'
import { LayersControl, Popup, Marker, useMapEvent, ZoomControl} from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import RedMarker from '../../Assets/MarkerRed.png'
import YellowMarker from '../../Assets/MarkerYellow.png'
import Accordion from 'react-bootstrap/Accordion';
import L from 'leaflet'

function MousePosTracker({setMouse}) {
  const map = useMapEvent('mousemove', (e) => {
    setMouse([e.latlng.lat.toFixed(6), e.latlng.lng.toFixed(6)])
  })
}
  
function MyMarker(props) {
  return (
    <Marker 
      position={props.position} 
      icon={props.markerGraph} 
      eventHandlers={{
        mouseover: (event) =>{ 
          event.target.openPopup();
          props.setShowInfo(true);
        },
        mouseout: (event) =>{
          event.target.closePopup();
          props.setShowInfo(false);
        },
        click: (event) =>{
          props.setZoomMode(prev => !prev)
        },
    }}>
      <Popup closeButton={false}>
        <div style={{fontWeight: 'bold', color: '#000000'}}>KM Ibrahim Zahier</div>
        <div className='text-secodary'>Cargo Ship</div>
      </Popup>
    </Marker>
  );
}

function LiveMap({startPos, startZoomLev}){
  const mapRef = useRef(null);
  const [mousePos, setMousePos] = useState([0,0]);
  const [showHoverInfo, setShowHoverInfo] = useState(false);
  const [position, setPosition] = useState([-2.787828, 119.707031]);
  const [zoomPower, setZoomPower] = useState([-2.787828, 119.707031]);
  const [shipInfo, setShipInfo] = useState([
    ['KM Abusamah',
      '-/25413',
      0.209,
      110.2,
      'Cargo Ship',
      'Indonesia',
      39941,
      50476,
    ], 
    [ 'T. Perak Surabaya',
      'T. Priok Jakarta',
      '03 Feb 23, 19.00'
    ], 
    [ 'Kapal Kargo 1',
      'Kapal Kargo 2',
      'Kapal Kargo 3',
      'Kapal Kargo 4',
      'Kapal Kargo 5',
      'Kapal Kargo 6',
      'Kapal Kargo 7',
    ]
  ]);

  const defaultZoom = 5
  const detailedZoom = 8

  const [zoomMode, setZoomMode] = useState(false);

  const [markers, setMarkers] = useState([
    {
      position: [51.5, -0.1],
      content: 'Marker 1'
    },
    {
      position: [51.51, -0.09],
      content: 'Marker 2'
    },
  ]);

  const { BaseLayer, Overlay } = LayersControl;

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

  useEffect(() => {
    if(mapRef.current == null) return;
    console.log(zoomMode)
    console.log(mapRef.current);
    if(zoomMode){
      // mapRef.current.zoom = detailedZoom;
    }else{
      // mapRef.current.zoom = defaultZoom
    }
  }, [zoomMode])

  return (
      <div style={{position: 'relative', height: '100%'}}>
        <div style={{position: 'relative', height: '100%', zIndex: '0'}}>
          <MapContainer ref={mapRef} style={{height: '100%'}} center={position} zoom={zoomMode ? detailedZoom : defaultZoom} scrollWheelZoom={false}>
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
                <MyMarker
                  position={position}
                  markerGraph={redMarker} 
                  setShowInfo={setShowHoverInfo}
                  setZoomMode={setZoomMode}
                />
              </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>

        <div style={{position: 'absolute', bottom: '2vh', left: '2vh', width: '20vw', zIndex: '10' }}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <div className="card" style={{display: showHoverInfo ? 'block' : 'none', background: 'rgba(255,255,255,0.5)'}}>
                  <div className="card-header">{shipInfo[0][0]}</div>
                  <div className="card-body">
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>IMO / MMSI</div>
                      <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][1]}</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>GT</div>
                      <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][6]}</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>DWT</div>
                      <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][7]}</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>Flag</div>
                      <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][5]}</div>
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
        <div style={{position: 'absolute', top: '1vh', right: '1vh', width: '20vw', height: '90vh', zIndex: '10', borderRadius: 5 }}>
          <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen >
            <Accordion.Item eventKey="0" style={{background: 'rgba(255,255,255,0.6)'}}>
              <Accordion.Header >Ship Information</Accordion.Header>
              <Accordion.Body >
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Name</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][1]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>IMO / MMSI</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][2]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Lat</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][3]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Long</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][4]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Type</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][5]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Flag</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][6]}</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={{background: 'rgba(255,255,255,0.6)'}}>
              <Accordion.Header>Voyage Information</Accordion.Header>
              <Accordion.Body>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Origin</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[1][0]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Destination</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[1][1]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>ETA</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[1][2]}</div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{background: 'rgba(255,255,255,0.6)'}}>
              <Accordion.Header>Nearest Ships</Accordion.Header>
              <Accordion.Body>
                <div style={{display: 'flex', flexDirection: 'column', gap: 5, width: '100%', textAlign: 'left'}}>
                  <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                    {shipInfo[2].map((item, index) => (
                      <li key={index}>{index + 1}. {item}</li>
                    ))}
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
  );
}

export default LiveMap;