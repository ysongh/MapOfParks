import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import { blueIcon, redIcon } from './Icons';

const MarkerList = ({ coordinatesList }) => {
    return(
        <div>
            {coordinatesList.map(cl => {
                return(
                    <Marker key={cl.Code} position={[cl.Latitude, cl.Longitude]} icon={blueIcon}>
                        <Popup>
                            <p>Branch: {cl.Branch}</p>
                            <p>Name: {cl.Name}</p>
                        </Popup>
                    </Marker>
                );
            })}
        </div>
    )
}

export default MarkerList;