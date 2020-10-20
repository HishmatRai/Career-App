import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,  StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function CameraGoLive(props) {
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
            <StatusBar translucent backgroundColor="#FF5757" />
            <Camera style={{ flex: 1 }} type={type}>
                {/* >>>>>>>>>>>>>>>> Main <<<<<<<<<<<<< */}
                <View style={styles._sound_main}>
                    <TouchableOpacity>
                        <Entypo name="cross" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    >
                        <EvilIcons name="camera" size={30} color="white" />
                        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Flip</Text>
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>>>>>>>> Side icons <<<<<<<<<<<<< */}

                <View style={styles._side_icons}>
                    <TouchableOpacity style={styles._side_icons_ind}>
                        <FontAwesome5 name="grin-beam" size={24} color="white" />
                        <Text style={styles._speed}>Beautify</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._side_icons_ind}>
                        <Entypo name="back-in-time" size={24} color="white" />
                        <Text style={styles._speed}>Timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._side_icons_ind}>
                        <MaterialCommunityIcons name="flash-off" size={24} color="white" />
                        <Text style={styles._speed}>Flash</Text>
                    </TouchableOpacity>
                </View>


                {/* >>>>>>>>>>>>>>>> upload <<<<<<<<<<<<< */}

                <View style={styles._bottom_tab_2}>
                    <TouchableOpacity style={styles._go_live_btn}
                        onPress={() => props.navigation.navigate("Live")}>
                        <Text style={styles._go_live}>Go To Live</Text>
                    </TouchableOpacity>

                </View>
                {/* >>>>>>>>>>>>>>>> Tab <<<<<<<<<<<<< */}

                <View style={styles._bottom_tab}>
                    <TouchableOpacity style={styles._template}>
                        <Text style={styles._live_text}>60s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._template}>
                        <Text style={styles._live_text}>15s</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._template}>
                        <Text style={styles._live_text}>Template</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._live}>
                        <Text style={styles._secound_15}>Live</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    _sound_main: {
        marginTop: 70,
        flexDirection: "row",
        marginRight: 20,
        marginLeft: 20,
        justifyContent: "space-between"
    },
    _side_icons: {
        alignSelf: "flex-end",
        marginRight: 20
    },
    _speed: {
        fontSize: 8,
        color: "white",
        textAlign: "center"
    },
    _bottom_tab: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,

    },
    _live: {
        width: "20%",
        alignSelf: "center",
        alignItems: "center"
    },
    _template: {
        width: "20%",
        alignSelf: "center",
        alignItems: "center"
    },

    _live_text: {
        color: "gray",
        textAlign: "center",
        fontWeight: "bold"
    },
    _secound_15: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
    },
    _bottom_tab_2: {
        position: "absolute",
        bottom: 40,
        justifyContent: "space-around",
        width: "90%",
        margin: 20,
        alignItems: "center",
        alignSelf: "center",


    },
    _Effects: {
        marginLeft: 20
    },
    _Effects_text: {
        color: "white",
        fontSize: 12,
        paddingTop: 3

    },
    _Effects_icons: {
        width: 33,
        height: 33
    },
    _upload_main: {
        marginRight: 20
    },
    _upload_icons: {
        width: 33,
        height: 33
    },
    _upload_text: {
        color: "white",
        fontSize: 12,
        paddingTop: 3
    },
    _video_recorder: {
        height: 94,
        width: 94
    },
    _side_icons_ind: {
        marginTop: 15
    },
    _go_live: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center"
    },
    _go_live_btn: {
        width: "40%",
        backgroundColor: "#F55F6A",
        borderRadius: 20,

    }

})