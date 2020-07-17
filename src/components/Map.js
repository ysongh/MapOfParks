import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { geolocated } from "react-geolocated";
import axios from 'axios';

import MarkerLocationList from './MarkerLocationList';
import MarkerTrainList from './MarkerTrainList';
import { APIKEY, API1, API2, API3 } from '../data/config';
import { trainData } from '../data/data';

class MapView extends Component{
    state = {
        coordinatesList: [],
        lat: 41.2423477,
        lng: -73.9082212,
        zoom: 8.5,
        direction: "",
        cars: []
    }

    async componentDidMount() {
        try{
            const data = await axios.get(API1);

            this.setState({ coordinatesList: data.data });
        } catch(err){
            console.error(err);
        }
    }

    async getDirections(e){
        const id = e.sourceTarget.options.value;

        const data = await axios.get(API2 + id + "/" + APIKEY + "station.json");

        this.setState({ direction: data.data.GetStationDetailJsonResult.Directions1 });
    }

    async checkTrainStatus(e){
        try{
            const id = e.sourceTarget.options.value.toString();
            const data = await axios.get(API3 + id + "/" + APIKEY);

            this.setState({ cars: data.data.consist.Cars });
        } catch(err){
            console.error(err);
            this.setState({ cars: [] });
        }
        
    }

    render(){
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <h1>Map</h1>

                {this.state.direction ? (
                    <div className="directionBox">
                        <h6>Direction:</h6>
                        <p>{this.state.direction}</p>
                    </div>
                ) : null}

                {this.state.cars.length ? (
                    <div className="directionBox">
                        <h6>Train Status:</h6>
                        {this.state.cars.map((car, index) => {
                            return <p key={index}>{car.PassengerCount} {car.PassengerLevel}</p>
                        })}
                    </div>
                ) : null}
                
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    <MarkerLocationList coordinatesList={this.state.coordinatesList} getDirections={this.getDirections.bind(this)} />
                    <MarkerTrainList coordinatesList={trainData} checkTrainStatus={this.checkTrainStatus.bind(this)} />
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