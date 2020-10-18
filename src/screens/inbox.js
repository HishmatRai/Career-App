import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, TouchableOpacityBase, ScrollView } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from './../components/dropdown'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Inbox = (props) => {
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

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  HEADER SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main}>
                <TouchableOpacity>
                    <Ionicons name="md-arrow-round-back" size={24} color="#FF5757" />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Inbox</Text>
                </TouchableOpacity>
                {/* <Image source={require('./../../assets/logo.png')} style={styles._logo} /> */}
                <TouchableOpacity style={{ marginLeft: 180 }}>
                    <FontAwesome name="user" size={24} color="#FF5757" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="md-notifications-outline" size={24} color="#FF5757" />
                </TouchableOpacity>
            </View>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  DROPDOWN SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <Text style={{ color: "red", textAlign: "center" }}>Dropdown</Text>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INBOX MESSAGE SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                {/* >>>>>>>>>> USER 1 MESSAGE    <<<<<<<<< */}
                <View style={styles._inbox_message_main}>
                    <TouchableOpacity style={styles._message_noti_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/inbox1.png')} style={styles._profile_image} />
                        </View>
                        <Text style={styles._message_txt}>WHAT'S NEW : FIND OUT HOW TO USE THE LATEST FEATURES AND EFFECTS ON YOUR VIDESO.</Text>
                    </TouchableOpacity>
                </View>
                {/* >>>>>>>>>> USER 2 MESSAGE    <<<<<<<<< */}
                <View style={styles._inbox_message_main}>
                    <TouchableOpacity style={styles._message_noti_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/inbox1.png')} style={styles._profile_image} />
                        </View>
                        <Text style={styles._message_txt2}>What's new : Find out how to use the latest features and effects on your videso.</Text>
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>> USER 3 MESSAGE    <<<<<<<<< */}
                <View style={styles._inbox_message_main}>
                    <TouchableOpacity style={styles._message_noti_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/inbox2.png')} style={styles._profile_image} />
                        </View>
                        <Text style={styles._message_txt2}>What's new : Find out how to use the latest features and effects on your videso.</Text>
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>> USER 4 MESSAGE    <<<<<<<<< */}
                <View style={styles._inbox_message_main}>
                    <TouchableOpacity style={styles._message_noti_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/inbox3.png')} style={styles._profile_image} />
                        </View>
                        <Text style={styles._message_txt2}>Account Updates : We want to hear from you 1w</Text>
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>> USER 5 MESSAGE    <<<<<<<<< */}
                <View style={styles._inbox_message_main}>
                    <TouchableOpacity style={styles._message_noti_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/inbox4.png')} style={styles._profile_image} />
                        </View>
                        <View>
                            <Text style={styles._user_name}>King Zack</Text>
                            <Text style={styles._message_txt2}>approved your follow request. 1w</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>> USER 6 MESSAGE    <<<<<<<<< */}
                <View style={styles._inbox_message_main}>
                    <TouchableOpacity style={styles._message_noti_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/inbox5.png')} style={styles._profile_image} />
                        </View>
                        <View>
                            <Text style={styles._user_name}>King Zack</Text>
                            <Text style={styles._message_txt2}>approved your follow request. 1w</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                      {/* >>>>>>>>>> USER 6 MESSAGE    <<<<<<<<< */}
                      <View style={styles._inbox_message_main}>
                    <TouchableOpacity style={styles._message_noti_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/inbox5.png')} style={styles._profile_image} />
                        </View>
                        <View>
                            <Text style={styles._user_name}>King Zack</Text>
                            <Text style={styles._message_txt2}>approved your follow request. 1w</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:100}}></View>
            </ScrollView>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  BOTTOM NAVIGATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._bottom_navigation_main_view}>
                <TouchableOpacity>
                    <Zocial name="email" size={24} color="#C5BFBF" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text_active}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-clipboard" size={24} color="white" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text}>Career Boards</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <MaterialCommunityIcons name="comment-account-outline" size={24} color="white" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text}>Mentors</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Fontisto name="player-settings" size={24} color="white" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    _bottom_navigation_main_view: {
        backgroundColor: "#FF5757",
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#707070",
        borderWidth: 2,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: 80,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: "center"

    },
    _bottom_navigation_text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"

    },
    _bottom_navigation_text_active: {
        color: "#C5BFBF",
        textAlign: "center",
        fontWeight: "bold"
    },
    _bottom_navigation_icons: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    _header_main: {
        borderColor: "#FF5757",
        borderWidth: 1,
        flexDirection: "row",
        marginTop: 24,
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: "center",
        textAlign: "center",
        height: 60
    },
    _inbox_message_main: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        // width: "90%",

    },
    _message_noti_main: {
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomColor: "#FF5757",
        borderBottomWidth: 2
    },
    _profile_main: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    _message_txt: {
        width: 250,
        marginLeft: 10,
        fontWeight: "normal",
        color: "#818181"
    },
    _message_txt2: {
        width: 200,
        marginLeft: 10,
        fontWeight: "normal",
        color: "#818181",

    },
    _user_name: {
        width: 200,
        marginLeft: 10,
        fontWeight: "normal",
        color: "black",
    },
    _profile_image: {
        width: 68,
        height: 68,
        borderRadius: 100
    }

});

export default Inbox;