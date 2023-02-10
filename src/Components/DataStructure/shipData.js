export default class ShipData{

    constructor(ShipInfo, VoyageInfo, NearestShips) {
        this.ShipInfo = ShipInfo;
        this.VoyageInfo = VoyageInfo;
        this.NearestShips = NearestShips;
        this.emergencySOS = false;
        this.mainShip = false;
    }

    getShipInfo(){
        return this.ShipInfo.getShipInfo()
    }

    getVoyageInfo(){
        return this.VoyageInfo.getVoyageInfo()
    }

    getNearestShip(){
        return this.NearestShips
    }

    getAllData(){
        return [this.getShipInfo(), this.getVoyageInfo(), this.getNearestShip()];
    }
}