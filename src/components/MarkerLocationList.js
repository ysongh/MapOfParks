import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import { locationIcon } from './Icons';

const MarkerList = ({ coordinatesList, getDirections }) => {
    return(
        <div>
            {coordinatesList.map(cl => {
                return(
                    <Marker key={cl.Code} position={[cl.Latitude, cl.Longitude]} icon={locationIcon} onClick={getDirections} value={cl.Code}>
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