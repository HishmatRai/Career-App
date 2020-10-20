import React, { useState, useEffect } from "react";
import { View, StyleSheet,  Dimensions, Image, StatusBar } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Getstart = () => {
    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="#FF5757" />

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  GETSTAT SECTION 1st IMAGE  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._getstart_top_image}>
                <Image source={require('./../../assets/getstart.png')} style={{ height: 250 }} />
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  GETSTAT SECTION  LOGO  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._logo}>
                <Image source={require('./../../assets/logo.png')} />
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  GETSTAT SECTION 2nd IMAGE  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._getstart_bottom_image}>
                <Image source={require('./../../assets/getstart.png')} style={{ height: 250 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    _getstart_top_image: {
        position: "absolute",
        top: 15,
        marginLeft: 10,
        marginRight: 10,

    },
    _logo: {
        marginTop: 10
    },
    _getstart_bottom_image: {
        position: "absolute",
        bottom: 10,
        marginLeft: 10,
        marginRight: 10
    }
});

export default Getstart;