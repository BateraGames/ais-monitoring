import React, { useEffect, useState, useRef } from 'react'
import { LayersControl, Popup, Marker, useMapEvent, DivIcon, ZoomControl} from "react-leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import RedMarker from '../../Assets/MarkerRed.png'
import YellowMarker from '../../Assets/MarkerYellow.png'
import Accordion from 'react-bootstrap/Accordion';
import ships from '../../Assets/Ships.svg'
import shipsYellow from '../../Assets/ShipsYellow.svg'
import L from 'leaflet';
import './livemap.css';
import SOS_Icon from '../../Assets/SOS_Icon.png'
// import ReactLeafletDriftMarker from "react-leaflet-drift-marker"


function MousePosTracker({setMouse}) {
  const map = useMapEvent('mousemove', (e) => {
    setMouse([e.latlng.lat.toFixed(6), e.latlng.lng.toFixed(6)])
  })
}
  
function CustomRedMarker(props) {
  return (
    <Marker 
      position={[props.details.ShipInfo.lat, props.details.ShipInfo.long]} 
      icon={props.markerGraph} 
      eventHandlers={{
        mouseover: (event) =>{ 
          event.target.openPopup();
          props.setHoverInfo(props.details.getAllData())
          props.setShowInfo(true);
        },
        mouseout: (event) =>{
          event.target.closePopup();
          props.setShowInfo(false);
        },
        click: (event) =>{
          event.target.openPopup();
          props.setShipInfo(props.details.getAllData())
          props.setSelectedMarkerPos([props.details.ShipInfo.lat, props.details.ShipInfo.long]);
          if(props.zoomMode){
            props.setSecondaryMarkers([]);
          }else{
            props.setSecondaryMarkers(props.details.NearestShips);
          }
          props.setZoomMode(prev => !prev)
        },
    }}>
      <Popup closeButton={false}>
        <div style={{fontWeight: 'bold', color: '#000000'}}>{props.details.ShipInfo.shipName}</div>
        <div className='text-secodary'>{props.details.ShipInfo.type}</div>
      </Popup>
    </Marker>
  );
}

function CustomYellowMarker(props) {
  return (
    <Marker 
      position={[props.details.ShipInfo.lat, props.details.ShipInfo.long]} 
      icon={props.markerGraph} 
      eventHandlers={{
        mouseover: (event) =>{ 
          event.target.openPopup();
          props.setHoverInfo(props.details.getAllData())
          props.setShowInfo(true);
        },
        mouseout: (event) =>{
          event.target.closePopup();
          props.setShowInfo(false);
        },
        click: (event) =>{
          event.target.openPopup();
          props.setShipInfo(props.details.getAllData())
          // props.setZoomMode(prev => !prev)
        },
    }}>
      <Popup closeButton={false}>
        <div style={{fontWeight: 'bold', color: '#000000'}}>{props.details.ShipInfo.shipName}</div>
        <div className='text-secodary'>{props.details.ShipInfo.type}</div>
      </Popup>
    </Marker>
  );
}

function SOSMarker(props) {
  return (
    <Marker 
      position={[props.details.ShipInfo.lat, props.details.ShipInfo.long]} 
      icon={props.markerGraph} >
    </Marker>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function LiveMap({shipDatabase}){
  const mapRef = useRef(null);
  const [mousePos, setMousePos] = useState([0,0]);
  const [showHoverInfo, setShowHoverInfo] = useState(false);
  const defaultPosition = [-2.787828, 119.707031];
  const [selectedMarkerPos, setSelectedMarkerPos] = useState([-2.787828, 119.707031]);
  const defaultZoom = 5;
  const detailedZoom = 10;
  const [markers, setMarkers] = useState(shipDatabase.ShipList);
  const [secondaryMarkers, setSecondaryMarkers] = useState([]);
  const [sosMakerList, setSOSMarkersList] = useState([]);
  const [shipInfo, setShipInfo] = useState(shipDatabase.ShipList[0].getAllData());
  const [hoverInfo, setHoverInfo] = useState([
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

  const [zoomMode, setZoomMode] = useState(false);
  const [refresher, setRefresher] = useState(false);

  const { BaseLayer, Overlay } = LayersControl;

  const redMarker = new L.Icon({
    iconUrl: ships,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -20]
  });

  const yellowMaker = new L.Icon({
    iconUrl: shipsYellow,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });

  const sosMaker = new L.Icon({
    iconUrl: SOS_Icon,
    iconSize: [30, 50],
    iconAnchor: [15, 50]
  });

  useEffect(() => {
    if(secondaryMarkers.length != 0){
      let randTarget = getRandomInt(0, secondaryMarkers.length-1);
      secondaryMarkers[randTarget].emergencySOS = true;
      setRefresher(prev => !prev)
    }
    const intervalId = setInterval(() => {
      if(secondaryMarkers.length != 0){
        secondaryMarkers.map((item, index) => {
          secondaryMarkers[index].emergencySOS = false;
        })

        let randTarget = getRandomInt(0, secondaryMarkers.length-1);
        secondaryMarkers[randTarget].emergencySOS = true;
        setRefresher(prev => !prev)
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [secondaryMarkers]);

  // useEffect(() => {
  //   console.log(sosMakerList)
  // }, [sosMakerList])

  useEffect(() => {
    if(mapRef.current == null) return;
    if(zoomMode){
      mapRef.current.setView(selectedMarkerPos, detailedZoom)
    }else{
      mapRef.current.setView(defaultPosition, defaultZoom)
    }
  }, [zoomMode])

  return (
      <div style={{position: 'relative', height: '100%'}}>
        <div style={{position: 'relative', height: '100%', zIndex: '0'}}>
          <MapContainer ref={mapRef} 
            style={{height: '100%'}} 
            center={defaultPosition} 
            zoom={defaultZoom} 
            scrollWheelZoom={false}
            >
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
                {markers.map((marker, index) => {
                  return (
                    <CustomRedMarker key={index} 
                    details = {marker}
                    markerGraph={redMarker}
                    setShowInfo={setShowHoverInfo}
                    setZoomMode={setZoomMode}
                    setSelectedMarkerPos={setSelectedMarkerPos} 
                    setHoverInfo={setHoverInfo}
                    setShipInfo={setShipInfo}
                    setSecondaryMarkers={setSecondaryMarkers}
                    zoomMode={zoomMode}
                    />
                  )
                })}

                {secondaryMarkers.map((marker, index) => {
                  return (
                    <CustomYellowMarker key={index} 
                    details = {marker}
                    markerGraph={yellowMaker}
                    setShowInfo={setShowHoverInfo}
                    setZoomMode={setZoomMode}
                    setSelectedMarkerPos={setSelectedMarkerPos}
                    setHoverInfo={setHoverInfo} 
                    setShipInfo={setShipInfo} 
                    zoomMode={zoomMode}
                    />
                  )
                })}
                {secondaryMarkers.map((marker, index) => {
                  if (marker.emergencySOS) {
                    return (
                      <SOSMarker key={index} 
                      details = {marker}
                      markerGraph={sosMaker}
                      setShowInfo={setShowHoverInfo}
                      setZoomMode={setZoomMode}
                      setSelectedMarkerPos={setSelectedMarkerPos}
                      setHoverInfo={setHoverInfo} 
                      setShipInfo={setShipInfo} 
                      zoomMode={zoomMode}
                      />
                    )
                  }
                })}
              </LayersControl.Overlay>
            </LayersControl>
          </MapContainer>
        </div>

        <div style={{position: 'absolute', bottom: '2vh', left: '2vh', width: '20vw', zIndex: '10' }}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                <div className="card" style={{display: showHoverInfo ? 'block' : 'none', background: 'rgba(255,255,255,0.5)'}}>
                  <div className="card-header">{hoverInfo[0][0]}</div>
                  <div className="card-body">
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>IMO / MMSI</div>
                      <div className="card-text" style={{width: '50%'}}>: {hoverInfo[0][1]}</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>GT</div>
                      <div className="card-text" style={{width: '50%'}}>: {hoverInfo[0][6]}</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>DWT</div>
                      <div className="card-text" style={{width: '50%'}}>: {hoverInfo[0][7]}</div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                      <div className="card-text" style={{width: '50%'}}>Flag</div>
                      <div className="card-text" style={{width: '50%'}}>: {hoverInfo[0][5]}</div>
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
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][0]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>IMO / MMSI</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][1]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Lat</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][2]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Long</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][3]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Type</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][4]}</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 5, width: '100%', textAlign: 'left'}}>
                  <div className="card-text" style={{width: '50%'}}>Flag</div>
                  <div className="card-text" style={{width: '50%'}}>: {shipInfo[0][5]}</div>
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
          {/* <img src={RedMarker} width={1000} height={1000} style={{rotate: '90deg'}} /> */}
        </div>
      </div>
  );
}

export default LiveMap;