import { Map, TileLayer, LayersControl, Marker } from "react-leaflet";
import LiveMap from "../Livemap/livemap";
import Header from "../Header/header";
import React, {useState, useEffect} from 'react'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShipDatabase from "../DataStructure/shipDatabase";

function Frame({}){
    const[currentTab, setCurrentTab] = useState(0);
    const shipDatabase = new ShipDatabase();

    return (
        <div className="d-flex flex-column" style={{background: '#ff0000', height: '100vh', width: '100vw'}}>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <LiveMap className='flex-fill' shipDatabase={shipDatabase} />
        </div>
    );
}

export default Frame;