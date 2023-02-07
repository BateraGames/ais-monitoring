import {EventEmitter} from 'events'
import ShipInfo from './shipInfo'
import VoyageInfo from './voyageInfo'
import ShipData from './shipData'

export default class MainShipData extends ShipData{

    constructor(ShipInfo, VoyageInfo, NearestShips) {
        super()
        this.ShipInfo = ShipInfo;
        this.VoyageInfo = VoyageInfo;
        this.NearestShips = NearestShips;
        let nameArrays = this.getNearestShip()
        this.NearestShips.forEach(element => {
            element.NearestShips = nameArrays;
        });
    }

    getShipInfo(){
        return [this.shipName, this.mmsi, this.lat, this.lon, this.type, this.flag, this.gt, this.dwt]
    }

    getVoyageInfo(){
        return [this.origin, this.destination, this.ETA]
    }

    getNearestShip(){
        if(this.NearestShips.lenght == 0) return [this.ShipInfo.shipName]
        let ships = [this.ShipInfo.shipName]
        this.NearestShips.forEach(element => {
            ships.push(element.ShipInfo.shipName)
        });
        return ships
    }
}