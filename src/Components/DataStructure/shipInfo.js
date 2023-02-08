export default class ShipInfo{

    constructor(shipName, mmsi, lat, lon, type, flag, gt, dwt) {
        super()
        this.shipName = shipName;
        this.mmsi = mmsi;
        this.lat = lat;
        this.lon = lon;
        this.type = type;
        this.flag = flag;
        this.gt = gt;
        this.dwt = dwt;
    }
}