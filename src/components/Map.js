import React, { Component } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import L from 'leaflet';

import IconBlue from '../images/icon1.svg';
import IconRed from '../images/icon2.svg';

const blueIcon = L.icon({
    iconUrl: IconBlue,
    iconRetinaUrl: IconBlue,
    iconSize: [25, 41],
    popupAnchor: [0, -10]
});

const redIcon = L.icon({
    iconUrl: IconRed,
    iconRetinaUrl: IconRed,
    iconSize: [25, 41],
    popupAnchor: [0, -10]
});

class MapUS extends Component{
    state = {
        lat: 40.0423477,
        lng: -100.4082212,
        zoom: 4,
    }
    render(){
        const position = [this.state.lat, this.state.lng];

        return (
            <Map className="map" center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
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
            </Map>
        )
    }
}

export default MapUS;