import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView, TouchableOpacityBase } from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function VideoCall() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent hidden={true} />
            <Camera style={{ flex: 1 }} type={type}>


                {/* >>>>>>>>>>>>>>>> Call <<<<<<<<<<<<< */}
                <View style={styles._call_main}>
                    <TouchableOpacity style={{ justifyContent: "space-around", alignSelf: "center" }}>
                        <Image source={require('./../../assets/call.png')} style={styles._call_icon} />
                    </TouchableOpacity>
                </View>
                {/* >>>>>>>>>>>>>>>> Tab <<<<<<<<<<<<< */}

                <View style={styles._bottom_tab}>
                    <TouchableOpacity style={styles._bottom_button}>
                        <EvilIcons name="camera" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._bottom_button} >
                        <FontAwesome name="volume-up" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._bottom_button}>
                        <MaterialIcons name="keyboard-voice" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({



    _bottom_tab: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    _bottom_button: {
        backgroundColor: "#777575",
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    _call_main: {
        // position:"absolute",
        // bottom: 100,
        // alignItems: "center",
        // alignItems: "center",
        // justifyContent: "space-around",
        marginTop: "130%"

    },
    _call_icon: {
        width: 64,
        height: 64,
        borderRadius: 100
    }

})