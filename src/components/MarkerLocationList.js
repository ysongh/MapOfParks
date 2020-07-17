import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import { locationIcon } from './Icons';

const MarkerList = ({ coordinatesList }) => {
    return(
        <div>
            {coordinatesList.map(cl => {
                return(
                    <Marker key={cl.Code} position={[cl.Latitude, cl.Longitude]} icon={locationIcon}>
                        <Popup>
                            <h6>{cl.Name}</h6>
                        </Popup>
                    </Marker>
                );
            })}
        </div>
    )
}

export default MarkerList;