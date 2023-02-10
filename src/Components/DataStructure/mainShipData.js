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
        this.mainShip = true;
        
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