export default class ShipInfo{

    constructor(shipName, mmsi, lat, long, type, flag, gt, dwt) {
        this.shipName = shipName;
        this.mmsi = mmsi;
        this.lat = lat;
        this.long = long;
        this.type = type;
        this.flag = flag;
        this.gt = gt;
        this.dwt = dwt;
    }

    getShipInfo(){
        return [this.shipName, this.mmsi, this.lat, this.lon, this.type, this.flag, this.gt, this.dwt]
    }
}