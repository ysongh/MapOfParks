import React, { Component } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import { geolocated } from "react-geolocated";

import { homeIcon, blueIcon, redIcon } from './Icons';

class MapView extends Component{
    state = {
        lat: 40.0423477,
        lng: -100.4082212,
        zoom: 4,
    }

    timer() {
        if(this.props.coords){
            this.setState({
                lat: this.props.coords.latitude,
                lng: this.props.coords.longitude,
                zoom: 6
            })
            clearInterval(this.intervalId);
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
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