import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { geolocated } from "react-geolocated";
import axios from 'axios';

import MarkerList from './MarkerList';
import { API1 } from '../config';

class MapView extends Component{
    state = {
        coordinatesList: [],
        lat: 41.2423477,
        lng: -73.9082212,
        zoom: 8.5,
    }

    async componentDidMount() {
        try{
            const data = await axios.get(API1);
            console.log(data)

            this.setState({ coordinatesList: data.data });
        } catch(err){
            console.error(err);
        }
    }

    render(){
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <h1>Map</h1>
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    <MarkerList coordinatesList={this.state.coordinatesList} />
                </Map>
            </div>
            
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(MapView)