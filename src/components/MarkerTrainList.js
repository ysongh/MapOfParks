import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import { trainIcon } from './Icons';

const MarkerTrainList = ({ coordinatesList }) => {
    return(
        <div>
            {coordinatesList.map(cl => {
                return(
                    <Marker key={cl.Code} position={[cl.Latitude, cl.Longitude]} icon={trainIcon}>
                        <Popup>
                            <p>Minutes Late: {cl.MinutesLate}</p>
                            <p>Status: {cl.StatusDescription}</p>
                        </Popup>
                    </Marker>
                );
            })}
        </div>
    )
}

export default MarkerTrainList;