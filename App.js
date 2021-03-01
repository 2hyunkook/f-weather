import React from 'react';
import * as Location from 'expo-location';
import Loading from "./Loading";
import {Alert} from 'react-native';
import axios from "axios";
import Weather from './Weather';

const OPENWEATHER_API_KEY = "ab0485d5bf9ea891d6d6629c8cff1679";

export default class extends React.Component {
    state = {
        isLoading: true
    };

    getWeather = async (latitude, longitude) => {
        const {data} = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&id=524901&APPID=${OPENWEATHER_API_KEY}&units=metric`
        );
        console.log(data);

        if (data.weather.length > 0) {
            this.setState({
                isLoading: false, 
                temp: data.main.temp, 
                weatherData: data.weather[0]
            });
        } else {
            console.log("We don't have weather data.");
        }
    };

    getLocation = async () => {
        const {granted} = await Location.requestPermissionsAsync();

        if (granted == true) {
            const {coords} = await Location.getCurrentPositionAsync();
            console.log(coords.latitude, coords.longitude);

            this.getWeather(coords.latitude, coords.longitude);
        } else {
            Alert.alert("Can't find you", "So sad");
        } // if
    };

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {isLoading, temp, weatherData} = this.state;
        return isLoading
            ? <Loading/>
            : <Weather temp={Math.round(temp)} weatherData={weatherData}/>;
    }

}
