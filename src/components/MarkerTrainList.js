import React from 'react';
import { Marker, Popup } from 'react-leaflet';

import { trainIcon } from './Icons';

const MarkerTrainList = ({ coordinatesList, checkTrainStatus }) => {
    return(
        <div>
            {coordinatesList.map(cl => {
                return(
                    <Marker key={cl.TrainName} position={[cl.Latitude, cl.Longitude]} icon={trainIcon} onClick={checkTrainStatus} value={cl.TrainName}>
                        <Popup>
                            <h6>To: {cl.DestinationDescription}</h6>
                            <p>Status: <span className={cl.StatusDescription === "On Time" ? "badge badge-primary badge-pill" : "badge badge-danger badge-pill"}>{cl.StatusDescription}</span></p>
                        </Popup>
                    </Marker>
                );
            })}
        </div>
    )
}

export default MarkerTrainList;