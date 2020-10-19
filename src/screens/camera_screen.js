// import React, { useState, useEffect } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
// import { Camera } from 'expo-camera';
// import { Entypo } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';
// import { EvilIcons } from '@expo/vector-icons';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// export default function CameraScreen(props) {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.front);
//     const [flash, setflash] = useState(Camera.Constants.flashMode);


//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             <StatusBar translucent backgroundColor="#FF5757" />
//             <Camera style={{ flex: 1 }} type={type}  flashMode={flash}  >
//                 {/* >>>>>>>>>>>>>>>> Main <<<<<<<<<<<<< */}
// <View style={styles._sound_main}>
//     <TouchableOpacity>
//         <Entypo name="cross" size={24} color="white" />
//     </TouchableOpacity>
//     <TouchableOpacity style={{ flexDirection: "row" }}>
//         <MaterialIcons name="audiotrack" size={24} color="white" />

//         <Text style={{ color: "white" }}>Sounds</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//         onPress={() => {
//             setType(
//                 type === Camera.Constants.Type.back
//                     ? Camera.Constants.Type.front
//                     : Camera.Constants.Type.back
//             );
//         }}
//     >
//         <EvilIcons name="camera" size={30} color="white" />
//         <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Flip</Text>
//     </TouchableOpacity>
// </View>

// {/* >>>>>>>>>>>>>>>> Side icons <<<<<<<<<<<<< */}

// <View style={styles._side_icons}>
//     <TouchableOpacity style={styles._side_icons_ind}>
//         <SimpleLineIcons name="speedometer" size={24} color="white" />
//         <Text style={styles._speed}>Speed</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles._side_icons_ind}>
//         <Ionicons name="ios-color-filter" size={24} color="white" />
//         <Text style={styles._speed}>Filters</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles._side_icons_ind}>
//         <FontAwesome5 name="grin-beam" size={24} color="white" />
//         <Text style={styles._speed}>Beautify</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles._side_icons_ind}>
//         <Entypo name="back-in-time" size={24} color="white" />
//         <Text style={styles._speed}>Timer</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles._side_icons_ind}>
//         <MaterialCommunityIcons name="flash-off" size={24} color="white" />
//         <Text style={styles._speed}>Flash</Text>
//     </TouchableOpacity>
// </View>


// {/* >>>>>>>>>>>>>>>> upload <<<<<<<<<<<<< */}

// <View style={styles._bottom_tab_2}>
//     <TouchableOpacity style={styles._Effects}>
//         <Image source={require('./../../assets/effects.png')} style={styles._Effects_icons} />
//         <Text style={styles._Effects_text}>Effects</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//         <Image source={require('./../../assets/video-_button.png')} style={styles._video_recorder} />

//     </TouchableOpacity>
//     <TouchableOpacity style={styles._upload_main}>
//         <Image source={require('./../../assets/gallery.png')} style={styles._upload_icons} />
//         <Text style={styles._upload_text}>Upload</Text>
//     </TouchableOpacity>
// </View>
// {/* >>>>>>>>>>>>>>>> Tab <<<<<<<<<<<<< */}

// <View style={styles._bottom_tab}>
//     <TouchableOpacity style={styles._template}>
//         <Text style={styles._live_text}>60s</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles._template}>
//         <Text style={styles._secound_15}>15s</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles._template}>
//         <Text style={styles._live_text}>Template</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles._live}
//         onPress={() => props.navigation.navigate("CameraGoLive")}>
//         <Text style={styles._live_text}>Live</Text>
//     </TouchableOpacity>
// </View>
//             </Camera>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     _sound_main: {
//         marginTop: 70,
//         flexDirection: "row",
//         marginRight: 20,
//         marginLeft: 20,
//         justifyContent: "space-between"
//     },
//     _side_icons: {
//         alignSelf: "flex-end",
//         marginRight: 20
//     },
//     _speed: {
//         fontSize: 8,
//         color: "white",
//         textAlign: "center"
//     },
//     _bottom_tab: {
//         width: "90%",
//         position: "absolute",
//         bottom: 0,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         margin: 20,

//     },
//     _live: {
//         borderWidth: 5,
//         borderColor: "#F55F6A",
//         width: "20%",
//         alignSelf: "center",
//         alignItems: "center"
//     },
//     _template: {
//         width: "20%",
//         alignSelf: "center",
//         alignItems: "center"
//     },

//     _live_text: {
//         color: "gray",
//         textAlign: "center",
//         fontWeight: "bold"
//     },
//     _secound_15: {
//         color: "white",
//         textAlign: "center",
//         fontWeight: "bold",
//         fontSize: 16
//     },
//     _bottom_tab_2: {
//         position: "absolute",
//         bottom: 40,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         width: "90%",
//         margin: 20,
//         alignItems: "center",
//         alignSelf: "center",

//     },
//     _Effects: {
//         marginLeft: 20
//     },
//     _Effects_text: {
//         color: "white",
//         fontSize: 12,
//         paddingTop: 3

//     },
//     _Effects_icons: {
//         width: 33,
//         height: 33
//     },
//     _upload_main: {
//         marginRight: 20
//     },
//     _upload_icons: {
//         width: 33,
//         height: 33
//     },
//     _upload_text: {
//         color: "white",
//         fontSize: 12,
//         paddingTop: 3
//     },
//     _video_recorder: {
//         height: 94,
//         width: 94
//     },
//     _side_icons_ind: {
//         marginTop: 15
//     }

// })

import React, { useState, useEffect, useContext } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Dimensions,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet

} from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo, Ionicons, FontAwesome, MaterialIcons, EvilIcons, SimpleLineIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Surface, Button, TextInput } from 'react-native-paper';
// import { Ionicons } from '@expo/vector-icons';
// import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useCode } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

let calTime;
let cameraRef;

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


const PickImage = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [isCameraUiOn, setIsCameraUiOn] = useState(false);
    const [isCapturing, setIsCapturing] = useState(false);
    const [flashMode, setFlashMode] = useState(true);
    const [capturePhoto, setCapturePhoto] = useState(null);
    const [galleryPic, setGalleryPic] = useState(null);
    const [showeffect, setshoweffect] = useState(false);




    const snap = async () => {
        if (cameraRef) {
            let photo = await cameraRef.takePictureAsync({
                quality: 0.5,
            });
            setCapturePhoto(photo.uri);
            setIsCapturing(false);
            setIsCameraUiOn(false);
        }
    };

    const getCameraPermission = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    useEffect(() => {
        getCameraPermission();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    openGallert = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setGalleryPic(result.uri);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Camera
                    style={{ flex: 1 }}
                    type={type}
                    ref={(ref) => (cameraRef = ref)}
                    flashMode={
                        flashMode
                            ? Camera.Constants.FlashMode.on
                            : Camera.Constants.FlashMode.off
                    }>
                    {showeffect ?
                        <View style={styles._sound_main}>
                            <TouchableOpacity
                                onPress={() => setshoweffect(!showeffect)}
                            >
                                <Entypo name="cross" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <MaterialIcons name="audiotrack" size={24} color="white" />

                                <Text style={{ color: "white" }}>Sounds</Text>
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
                        </View> : null}

                    {/* >>>>>>>>>>>>>>>> Side icons <<<<<<<<<<<<< */}
                    {showeffect ?
                        <View style={styles._side_icons}>
                            <TouchableOpacity style={styles._side_icons_ind}>
                                <SimpleLineIcons name="speedometer" size={24} color="white" />
                                <Text style={styles._speed}>Speed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._side_icons_ind}>
                                <Ionicons name="ios-color-filter" size={24} color="white" />
                                <Text style={styles._speed}>Filters</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._side_icons_ind}>
                                <FontAwesome5 name="grin-beam" size={24} color="white" />
                                <Text style={styles._speed}>Beautify</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._side_icons_ind}>
                                <Entypo name="back-in-time" size={24} color="white" />
                                <Text style={styles._speed}>Timer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._side_icons_ind} onPress={() => setFlashMode(true)}>
                                {flashMode ?
                                    <Ionicons name="md-flash" size={24} color="white" /> :
                                    <MaterialCommunityIcons name="flash-off" size={24} color="white" />
                                }
                                <Text style={styles._speed}>Flash</Text>
                            </TouchableOpacity>
                        </View> : null}


                    {/* >>>>>>>>>>>>>>>> upload <<<<<<<<<<<<< */}

                    <View style={styles._bottom_tab_2}>
                        <TouchableOpacity style={styles._Effects}
                            onPress={() => setshoweffect(!showeffect)}
                        >
                            <Image source={require('./../../assets/effects.png')} style={styles._Effects_icons} />
                            <Text style={styles._Effects_text}>Effects</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setIsCapturing(true);
                                snap();
                            }}
                        >
                            <Image source={require('./../../assets/video-_button.png')} style={styles._video_recorder} />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles._upload_main}
                            onPress={() => openGallert()}
                        >
                            <Image source={require('./../../assets/gallery.png')} style={styles._upload_icons} />
                            <Text style={styles._upload_text}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                    {/* >>>>>>>>>>>>>>>> Tab <<<<<<<<<<<<< */}

                    <View style={styles._bottom_tab}>
                        <TouchableOpacity style={styles._template}>
                            <Text style={styles._live_text}>60s</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._template}>
                            <Text style={styles._secound_15}>15s</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._template}>
                            <Text style={styles._live_text}>Template</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._live}
                            onPress={() => props.navigation.navigate("CameraGoLive")}>
                            <Text style={styles._live_text}>Live</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Entypo
              name="cross"
              color="#FFF"
              size={50}
              onPress={() => setIsCameraUiOn(false)}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'flex-end',
                flexDirection: 'row',
                zIndex: 9999,
              }}>
              <Ionicons
                name="md-reverse-camera"
                color="#FFF"
                size={35}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              />
         
              <Ionicons
                name="ios-flash"
                color={flashMode ? 'gold' : '#FFF'}
                size={35}
                onPress={() => setFlashMode(!flashMode)}
              />
            </View> */}
                </Camera>
            </View>
        </SafeAreaView>
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
        borderWidth: 5,
        borderColor: "#F55F6A",
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
        flexDirection: "row",
        justifyContent: "space-between",
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
    }

})


export default PickImage;
