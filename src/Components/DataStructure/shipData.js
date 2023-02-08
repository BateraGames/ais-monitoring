import {EventEmitter} from 'events'
import ShipInfo from './shipInfo'
import VoyageInfo from './voyageInfo'

export default class ShipData extends EventEmitter{

    constructor(ShipInfo, VoyageInfo, NearestShips) {
        super()
        this.ShipInfo = ShipInfo;
        this.VoyageInfo = VoyageInfo;
        this.NearestShips = NearestShips;
    }

    getShipInfo(){
        return [this.shipName, this.mmsi, this.lat, this.lon, this.type, this.flag, this.gt, this.dwt]
    }

    getVoyageInfo(){
        return [this.origin, this.destination, this.ETA]
    }

    getNearestShip(){
        return this.NearestShips
    }
}