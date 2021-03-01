import React from "react";
import {View, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp, weatherData}) {

    console.log("temp : ", temp);
    console.log("weatherData : ", weatherData);

    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
            <Text>{weatherData.main}</Text>
        </View>
    );
}

Weather.prototype = {
    temp:PropTypes.number.isRequired, 
    condition:PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});