import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import { blueIcon, redIcon } from './Icons';

const MarkerList = () => {
    return(
        <div>
             <Marker position={[40.0423477, -100.4082212]} icon={blueIcon}>
                <Popup>
                    10/50
                </Popup>
            </Marker>
            <Marker position={[30.0423477, -100.4082212]} icon={redIcon}>
                <Popup>
                    100/75
                </Popup>
            </Marker>
        </div>
    )
}

export default MarkerList;