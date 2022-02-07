import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native'

function MyText({children}) {
    return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir",
        textAlign:'right'
    }
})

export default MyText;