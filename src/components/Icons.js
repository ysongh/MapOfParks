import L from 'leaflet';

import IconBlue from '../images/icon1.svg';
import IconRed from '../images/icon2.svg';
import IconHome from '../images/home.svg';
import IconLocation from '../images/location.svg';
import IconTrain from '../images/train.svg';

export const homeIcon = L.icon({
    iconUrl: IconHome,
    iconRetinaUrl: IconHome,
    iconSize: [25, 41],
    popupAnchor: [0, -10]
});

export const blueIcon = L.icon({
    iconUrl: IconBlue,
    iconRetinaUrl: IconBlue,
    iconSize: [25, 41],
    popupAnchor: [0, -10]
});

export const redIcon = L.icon({
    iconUrl: IconRed,
    iconRetinaUrl: IconRed,
    iconSize: [25, 41],
    popupAnchor: [0, -10]
});

export const locationIcon = L.icon({
    iconUrl: IconLocation,
    iconRetinaUrl: IconLocation,
    iconSize: [10, 10],
    popupAnchor: [0, -10]
});

export const trainIcon = L.icon({
    iconUrl: IconTrain,
    iconRetinaUrl: IconTrain,
    iconSize: [20, 20],
    popupAnchor: [0, -10]
});