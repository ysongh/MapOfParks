import React, { Component } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import { geolocated } from "react-geolocated";
import axios from 'axios';

import MarkerList from './MarkerList';
import { homeIcon } from './Icons';
import { API1 } from '../config';

class MapView extends Component{
    state = {
        coordinatesList: [],
        lat: 40.0423477,
        lng: -73.8082212,
        zoom: 8.5,
    }

    timer() {
        if(this.props.coords){
            this.setState({
                lat: this.props.coords.latitude,
                lng: this.props.coords.longitude
            })
            clearInterval(this.intervalId);
        }
    }

    async componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);

        try{
            const data = await axios.get(API1);

            this.setState({ coordinatesList: data.data });
        } catch(err){
            console.error(err);
        }
    }

    render(){
        const position = [this.state.lat, this.state.lng];
        const location = (
            !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (
                    <Marker position={[this.props.coords.latitude, this.props.coords.longitude]} icon={homeIcon}>
                        <Popup>
                            Your Location
                        </Popup>
                    </Marker>
            ) : null
        )
        return (
            <div>
                <h1>Map</h1>
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    <MarkerList coordinatesList={this.state.coordinatesList} />
                    {location}
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