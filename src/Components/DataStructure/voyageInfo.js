export default class VoyageInfo{

    constructor(origin, destination, eta) {
        this.origin = origin;
        this.destination = destination;
        this.eta = eta;
    }

    getVoyageInfo(){
        return [this.origin, this.destination, this.eta]
    }
}