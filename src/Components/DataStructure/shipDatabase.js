import {EventEmitter} from 'events'
import ShipInfo from './shipInfo'
import VoyageInfo from './voyageInfo'
import ShipData from './shipData' 
import MainShipData from './mainShipData'

export default class ShipDatabase extends EventEmitter{

    constructor() {
        super()
        this.pos = [-7.21985206, 112.82272339]
        this.ShipList = [
            new MainShipData(
                new ShipInfo(
                    'Main Ship 1', '~/25413', 
                    this.pos[0], this.pos[1], 
                    "Cargo", 'Indonesia', 
                    39941, 50476
                ),
                new VoyageInfo(
                    "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                ),
                [
                    new ShipData(
                        new ShipInfo(
                            'Other Ship 1', '~/25413', 
                            (this.pos[0] + 0.1), (this.pos[1]), 
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),
                    new ShipData(
                        new ShipInfo(
                            'Other Ship 2', '~/25413', 
                            (this.pos[0] + 0.1), (this.pos[1] + 0.1), 
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),
                    new ShipData(
                        new ShipInfo(
                            'Other Ship 3', '~/25413', 
                            (this.pos[0]), (this.pos[1] + 0.1), 
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),
                    new ShipData(
                        new ShipInfo(
                            'Other Ship 4', '~/25413', 
                            (this.pos[0] - 0.1), (this.pos[1] + 0.1), 
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),
                    new ShipData(
                        new ShipInfo(
                            'Other Ship 5', '~/25413', 
                            (this.pos[0] - 0.1), (this.pos[1]), 
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),

                ] 
            )
        ]
    }
}