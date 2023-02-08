import { Map, TileLayer, LayersControl, Marker } from "react-leaflet";
import LiveMap from "../Livemap/livemap";
import Header from "../Header/header";
import React, {useState, useEffect} from 'react'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Frame({}){
    const[currentTab, setCurrentTab] = useState(0);
    // const[]

    useEffect(() =>{
        console.log(currentTab)
    }, []);

    return (
        <div className="d-flex flex-column" style={{background: '#ff0000', height: '100vh', width: '100vw'}}>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <LiveMap className='flex-fill' />
        </div>
    );
}

export default Frame;