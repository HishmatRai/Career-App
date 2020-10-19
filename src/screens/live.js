import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function Live() {
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
                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/live.png')} style={styles._live_user_prfile} />
                    </TouchableOpacity>
                    <Text style={styles._live_user_email}>Melina@extreme</Text>
                    <TouchableOpacity style={styles._live_btn}>
                        <Text style={styles._live_btn_txt}>LIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._live_seen}>
                        <Ionicons name="md-eye" size={20} color="white" style={styles._live_seen_iocns} />
                        <Text style={styles._live_seen_count}>30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="cross" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>>>>>>>> live comment show <<<<<<<<<<<<< */}

                <View style={styles._live_comment_main}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* <<<<<<<<<<< user 1 commnet >>>>>>>>>>>>>>>>> */}
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={styles._live_comment_user_profile_main}>
                                <Image source={require('./../../assets/comment1.png')} style={styles._live_comment_user_profile} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles._live_comment_user_name}>youvi_play</Text>
                                <Text style={styles._live_comment_user_text}>Excellent sound...I like It...</Text>
                            </View>
                        </View>

                        {/* <<<<<<<<<<< user 2 commnet >>>>>>>>>>>>>>>>> */}
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={styles._live_comment_user_profile_main}>
                                <Image source={require('./../../assets/comment1.png')} style={styles._live_comment_user_profile} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles._live_comment_user_name}>youvi_play</Text>
                                <Text style={styles._live_comment_user_text}>Excellent sound...I like It...</Text>
                            </View>
                        </View>

                        {/* <<<<<<<<<<< user 3 commnet >>>>>>>>>>>>>>>>> */}
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={styles._live_comment_user_profile_main}>
                                <Image source={require('./../../assets/comment1.png')} style={styles._live_comment_user_profile} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles._live_comment_user_name}>youvi_play</Text>
                                <Text style={styles._live_comment_user_text}>Excellent sound...I like It...</Text>
                            </View>
                        </View>

                        {/* <<<<<<<<<<< user 4 commnet >>>>>>>>>>>>>>>>> */}
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={styles._live_comment_user_profile_main}>
                                <Image source={require('./../../assets/comment1.png')} style={styles._live_comment_user_profile} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles._live_comment_user_name}>youvi_play</Text>
                                <Text style={styles._live_comment_user_text}>Excellent sound...I like It...</Text>
                            </View>
                        </View>

                           {/* <<<<<<<<<<< user 5 commnet >>>>>>>>>>>>>>>>> */}
                           <View style={{ flexDirection: "row",marginTop:20 }}>
                            <View style={styles._live_comment_user_profile_main}>
                                <Image source={require('./../../assets/comment1.png')} style={styles._live_comment_user_profile} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles._live_comment_user_name}>youvi_play</Text>
                                <Text style={styles._live_comment_user_text}>Excellent sound...I like It...</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* >>>>>>>>>>>>>>>> Tab <<<<<<<<<<<<< */}

                <View style={styles._bottom_tab}>
                    <TouchableOpacity >
                        <Text style={styles._secound_15}>Commnet</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity >
                            <Ionicons name="md-heart-empty" size={24} color="white" style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="more-horizontal" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    _sound_main: {
        marginTop: 50,
        flexDirection: "row",
        marginRight: 20,
        marginLeft: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },


    _bottom_tab: {
        width: "90%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        borderTopColor: "white",
        borderTopWidth: 1,
        paddingTop: 10

    },

    _secound_15: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
    },
    _profile_main: {
        width: 49,
        height: 49,
        borderRadius: 100
    },
    _live_user_prfile: {
        width: 49,
        height: 49,
        borderRadius: 100
    },
    _live_user_email: {
        color: "white",
        fontSize: 16,
        marginLeft: -10

    },
    _live_btn: {
        backgroundColor: "#F55F6A",
        borderRadius: 5
    },
    _live_btn_txt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 2,
        paddingBottom: 2
    },
    _live_seen: {
        flexDirection: "row",
        backgroundColor: "#707070",
        borderRadius: 5,
        alignItems: "center"
    },
    _live_seen_iocns: {
        marginLeft: 5,
        marginRight: 5
    },
    _live_seen_count: {
        color: "white",
        fontWeight: "bold",
        fontSize: 13,
        marginRight: 5

    },
    _live_comment_main: {
        marginTop: "60%",
        margin: 20,
        flexDirection: 'row',
        height: "43%"
    },
    _live_comment_user_profile_main: {
        width: 49,
        height: 49,
        borderRadius: 100,
    },
    _live_comment_user_profile: {
        width: 49,
        height: 49,
        borderRadius: 100,
    },
    _live_comment_user_text: {
        color: "white",
        fontSize: 16
    },
    _live_comment_user_name: {
        color: "white",
        fontSize: 14
    }


})