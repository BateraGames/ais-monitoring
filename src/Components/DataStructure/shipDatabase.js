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
                            -7.166452, 112.794571, 
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
                            -7.184171, 112.760925, 
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
                            -7.298648, 112.868042, 
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
                            -7.208868, 112.919167, 
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
                            'Other Ship 6', '~/25413', 
                            -6.969278, 112.708546,
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
                            'Other Ship 7', '~/25413', 
                            -7.464009, 112.882901,
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),

                ] 
            ),
            new MainShipData(
                new ShipInfo(
                    'Main Ship 2', '~/25413', 
                    -4.544195, 120.761719, 
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
                            -4.230581, 121.333008, 
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
                            -4.897487, 121.128387, 
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
                            -4.227487, 121.458387, 
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
                            -4.338807, 120.566711, 
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
                            -4.088084, 120.739746, 
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
                            'Other Ship 6', '~/25413', 
                            -4.879693, 120.617338, 
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
                            'Other Ship 7', '~/25413', 
                            -4.756490, 120.724422,
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),
                ] 
            ),
            new MainShipData(
                new ShipInfo(
                    'Main Ship 3', '~/25413', 
                    2.893220, 106.262427, 
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
                            3.254004, 105.518328, 
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
                            3.477305, 106.024775, 
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
                            3.488275, 106.236198, 
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
                             2.500268, 105.669268, 
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
                            2.676180, 106.093419, 
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
                            'Other Ship 6', '~/25413', 
                            2.925910, 105.975352, 
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
                            'Other Ship 7', '~/25413', 
                            2.684166, 106.498485,
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),
                ] 
            ),
            new MainShipData(
                new ShipInfo(
                    'Main Ship 4', '~/25413', 
                    -4.544210, 107.222997, 
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
                            -4.201810, 107.014910, 
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
                            -4.197700, 107.595636, 
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
                            -4.689403, 107.623094, 
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
                            -4.835890, 107.414417, 
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
                            -4.798929, 107.049232, 
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
                            'Other Ship 6', '~/25413', 
                            -4.605878, 106.896842, 
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
                            'Other Ship 7', '~/25413', 
                            -4.549733, 107.112384,
                            "Cargo", 'Indonesia', 
                            39941, 50476
                        ),
                        new VoyageInfo(
                            "T. Perak Surabaya", "T. Priok Jakarta", "03 Feb 23, 19.00"
                        ),
                        [] 
                    ),
                ] 
            ),
            new MainShipData(
                new ShipInfo(
                    'Main Ship 5', '~/25413', 
                    -7.516674, 124.048975, 
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
                            -7.864186, 123.504116, 
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
                            -7.647753, 123.689455, 
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
                            -8.070984, 124.537893, 
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
                            -8.087306, 124.024437, 
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
                            -7.640945, 123.992860, 
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
                            'Other Ship 6', '~/25413', 
                            -7.324943, 124.027182, 
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
                            'Other Ship 7', '~/25413', 
                            -7.632775, 124.233114,
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