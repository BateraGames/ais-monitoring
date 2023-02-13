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
        this.angle = this.getRandomInt(0, 360)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    getShipInfo(){
        return [this.shipName, this.mmsi, this.lat, this.long, this.type, this.flag, this.gt, this.dwt]
    }
}