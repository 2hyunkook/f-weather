import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting F-Weather</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor : "#FDF6AA",
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    text: {
      color: "black",
      fontSize: 30
    },
  });
  