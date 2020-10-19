import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Notification = (props) => {
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
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                >
                    <Ionicons name="md-arrow-round-back" size={24} color="#FF5757" />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Text style={{ color: "#FF5757", fontSize: 20, marginRight: 100 }}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="#FF5757" />
                </TouchableOpacity>
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  ACTIVITY SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._activity_main}>
                <Text style={styles._activity_text}>Activity</Text>
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  NOTOFICATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>

                <View style={{ margin: 20 }}>
                    {/* <<<<<<<<<< Message Card No 01 >>>>>>>>>> */}
                    <TouchableOpacity style={styles._notification_main}
                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/notification1.png')} style={styles._user_profile} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="email-open" size={24} color="#FF5757" />
                                <Text style={styles._notification_show}>You have message from Karrot</Text>
                            </View>
                            <Text style={styles._time}>18 min ago</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <<<<<<<<<< Message Card No 02 >>>>>>>>>> */}
                    <TouchableOpacity style={styles._notification_main}
                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/notification1.png')} style={styles._user_profile} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="email-open" size={24} color="#FF5757" />
                                <Text style={styles._notification_show}>You have message from Karrot</Text>
                            </View>
                            <Text style={styles._time}>18 min ago</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <<<<<<<<<< Message Card No 03 >>>>>>>>>> */}
                    <TouchableOpacity style={styles._notification_main}
                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/notification1.png')} style={styles._user_profile} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="email-open" size={24} color="#FF5757" />
                                <Text style={styles._notification_show}>You have message from Karrot</Text>
                            </View>
                            <Text style={styles._time}>18 min ago</Text>
                        </View>
                    </TouchableOpacity>


                    {/* <<<<<<<<<< Message Card No 04 >>>>>>>>>> */}
                    <TouchableOpacity style={styles._notification_main}
                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/notification1.png')} style={styles._user_profile} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="email-open" size={24} color="#FF5757" />
                                <Text style={styles._notification_show}>You have message from Karrot</Text>
                            </View>
                            <Text style={styles._time}>18 min ago</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <<<<<<<<<< Message Card No 05 >>>>>>>>>> */}
                    <TouchableOpacity style={styles._notification_main}
                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/notification1.png')} style={styles._user_profile} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="email-open" size={24} color="#FF5757" />
                                <Text style={styles._notification_show}>You have message from Karrot</Text>
                            </View>
                            <Text style={styles._time}>18 min ago</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <<<<<<<<<< Message Card No 06 >>>>>>>>>> */}
                    <TouchableOpacity style={styles._notification_main}
                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/notification1.png')} style={styles._user_profile} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Ionicons name="ios-chatboxes" size={24} color="#FF5757" />
                                <Text style={styles._notification_show}>You have message from Karrot</Text>
                            </View>
                            <Text style={styles._time}>18 min ago</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <<<<<<<<<< Missed Call Card No 01 >>>>>>>>>> */}
                    <TouchableOpacity style={styles._notification_main}
                        onPress={() => props.navigation.navigate("VideoCall")}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/notification1.png')} style={styles._user_profile} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialIcons name="call-missed-outgoing" size={24} color="#FF5757" />
                                <Text style={styles._notification_show}>You have missed call from Karrot</Text>
                            </View>
                            <Text style={styles._time}>18 min ago</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    _header_main: {
        flexDirection: "row",
        marginTop: 24,
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: "center",
        textAlign: "center",
        height: 60
    },
    _activity_main: {
        borderBottomColor: "#FF5757",
        borderBottomWidth: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10
    },
    _activity_text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10
    },
    _notification_main: {
        flexDirection: "row",
        marginTop: 20
    },
    _profile_main: {
        width: 41,
        height: 41,
        borderRadius: 100
    },
    _user_profile: {
        width: 41,
        height: 41,
        borderRadius: 100
    },
    _notification_show: {
        width: 250,
        marginLeft: 10,
        fontSize: 15
    },
    _time: {
        color: "#969696"
    }


});

export default Notification;