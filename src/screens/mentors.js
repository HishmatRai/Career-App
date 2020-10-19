import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView, TextInput, TouchableOpacityBase } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from '../components/datepicker'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Rating from './../components/rating'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Mentors = (props) => {
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
                    <Entypo name="menu" size={24} color="#FF5757" />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Mentors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150 }}>
                    <AntDesign name="search1" size={24} color="#FF5757" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Notification")}
                >
                    <Ionicons name="md-notifications-outline" size={24} color="#FF5757" />
                </TouchableOpacity>
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  ADD DATA SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={{ margin: 20 }}>
                    {/* <<<<<<<<<<<<<<<<  Card No 01 >>>>>>>>>>>>>>>>> */}
                    <>
                        <View style={styles._add_data_main}>
                            <TouchableOpacity style={styles._career_category_btn}>
                                <Text style={styles._career_category_btn_txt}>Top Mentors Near You</Text>
                            </TouchableOpacity>
                            {/* <<<<<<<<<< >>>>>>>>>>> */}
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "30%" }}>
                                    <TouchableOpacity style={styles._profile_main}>
                                        <Image source={require('./../../assets/mentors1.png')} style={styles._profile_image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("ChatWithMentors")}
                                    >
                                        <Ionicons name="ios-chatboxes" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("VideoCall")}
                                    >
                                        <Ionicons name="ios-call" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("VideoCall")}
                                    >
                                        <Ionicons name="ios-videocam" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                </View>
                                {/* <<<<<<<<<< >>>>>>>>>>> */}
                                <View style={{ width: "70%" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles._user_name}>Mentor's Name</Text>
                                        <Text style={styles._user_avtive}></Text>
                                    </View>
                                    <Text style={styles._user_post}>Founder and Director of Career Coachda</Text>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <MaterialIcons name="location-on" size={15} color="#FF5757" style={{ marginLeft: -4 }} />
                                        <Text style={styles._area_address}>Texas, USA</Text>
                                    </View>
                                    {/* <<<<<<<<< Rating >>>>>>>>>> */}
                                    <View style={styles._rating}>
                                        <Rating />
                                    </View>

                                    {/* <<<<<<<<< Skills >>>>>>>>>> */}
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Enginering</Text>
                                        </View>
                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Humanities</Text>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>

                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Enginering</Text>
                                        </View>
                                        <TouchableOpacity style={styles._see_more}>
                                            <Text style={styles._see_more_btn_txt}>See More</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </>

                    {/* <<<<<<<<<<<<<<<<  Card No 02 >>>>>>>>>>>>>>>>> */}
                    <>
                        <View style={styles._add_data_main}>
                            <TouchableOpacity style={styles._career_category_btn}>
                                <Text style={styles._career_category_btn_txt}>Top Mentors Near You</Text>
                            </TouchableOpacity>
                            {/* <<<<<<<<<< >>>>>>>>>>> */}
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "30%" }}>
                                    <TouchableOpacity style={styles._profile_main}>
                                        <Image source={require('./../../assets/mentors1.png')} style={styles._profile_image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                                        <Ionicons name="ios-chatboxes" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                     onPress={() => props.navigation.navigate("VideoCall")}>
                                        <Ionicons name="ios-call" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                     onPress={() => props.navigation.navigate("VideoCall")}>
                                        <Ionicons name="ios-videocam" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                </View>
                                {/* <<<<<<<<<< >>>>>>>>>>> */}
                                <View style={{ width: "70%" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles._user_name}>Mentor's Name</Text>
                                        <Text style={styles._user_avtive}></Text>
                                    </View>
                                    <Text style={styles._user_post}>Founder and Director of Career Coachda</Text>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <MaterialIcons name="location-on" size={15} color="#FF5757" style={{ marginLeft: -4 }} />
                                        <Text style={styles._area_address}>Texas, USA</Text>
                                    </View>
                                    {/* <<<<<<<<< Rating >>>>>>>>>> */}
                                    <View style={styles._rating}>
                                        <Rating />
                                    </View>

                                    {/* <<<<<<<<< Skills >>>>>>>>>> */}
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Enginering</Text>
                                        </View>
                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Humanities</Text>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>

                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Enginering</Text>
                                        </View>
                                        <TouchableOpacity style={styles._see_more}>
                                            <Text style={styles._see_more_btn_txt}>See More</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </>

                    {/* <<<<<<<<<<<<<<<<  Card No 03 >>>>>>>>>>>>>>>>> */}
                    <>
                        <View style={styles._add_data_main}>
                            <TouchableOpacity style={styles._career_category_btn}>
                                <Text style={styles._career_category_btn_txt}>Top Mentors Near You</Text>
                            </TouchableOpacity>
                            {/* <<<<<<<<<< >>>>>>>>>>> */}
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: "30%" }}>
                                    <TouchableOpacity style={styles._profile_main}>
                                        <Image source={require('./../../assets/mentors1.png')} style={styles._profile_image} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("ChatWithMentors")}>
                                        <Ionicons name="ios-chatboxes" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                     onPress={() => props.navigation.navigate("VideoCall")}>
                                        <Ionicons name="ios-call" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                     onPress={() => props.navigation.navigate("VideoCall")}>
                                        <Ionicons name="ios-videocam" size={24} color="#FF5757" style={styles._icons} />
                                    </TouchableOpacity>
                                </View>
                                {/* <<<<<<<<<< >>>>>>>>>>> */}
                                <View style={{ width: "70%" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles._user_name}>Mentor's Name</Text>
                                        <Text style={styles._user_avtive}></Text>
                                    </View>
                                    <Text style={styles._user_post}>Founder and Director of Career Coachda</Text>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <MaterialIcons name="location-on" size={15} color="#FF5757" style={{ marginLeft: -4 }} />
                                        <Text style={styles._area_address}>Texas, USA</Text>
                                    </View>
                                    {/* <<<<<<<<< Rating >>>>>>>>>> */}
                                    <View style={styles._rating}>
                                        <Rating />
                                    </View>

                                    {/* <<<<<<<<< Skills >>>>>>>>>> */}
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Enginering</Text>
                                        </View>
                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Humanities</Text>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>

                                        <View style={styles._skills_show}>
                                            <Text style={styles._skills_txt}>Enginering</Text>
                                        </View>
                                        <TouchableOpacity style={styles._see_more}>
                                            <Text style={styles._see_more_btn_txt}>See More</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </>



                    <View style={{ marginBottom: 100 }}></View>
                </View>
            </ScrollView>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  BOTTOM NAVIGATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._bottom_navigation_main_view}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Inbox")}
                >
                    <Zocial name="email" size={24} color="white" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-clipboard" size={24} color="white" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text}>Career Boards</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <MaterialCommunityIcons name="comment-account-outline" size={24} color="#C5BFBF" style={styles._bottom_navigation_icons_active} />
                    <Text style={styles._bottom_navigation_text_active}>Mentors</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => props.navigation.navigate("Settings")}
                >
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
    _bottom_navigation_icons_active: {
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

    _add_data_main: {
        borderColor: "#FF5757",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20
    },
    _career_category_btn: {
        backgroundColor: "#FF5757",
        marginBottom: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6

    },
    _career_category_btn_txt: {
        color: "white",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: "bold",
        fontSize: 17
    },

    _post_date: {
        color: "#FF5757",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingRight: 20,
        fontSize: 17


    },
    _learn_more_btn: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 10,
        marginTop: 10
    },
    _profile_main: {
        width: 54,
        height: 54,
        borderRadius: 100,
        marginLeft: 10
    },
    _profile_image: {
        width: 54,
        height: 54,
        borderRadius: 100,
    },
    _user_name: {
        fontSize: 17,
        fontWeight: "normal",
    },
    _user_avtive: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "#19F64D",
        marginLeft: 10,
        marginTop: 10,

    },
    _user_post: {
        fontSize: 12,
        marginTop: 10
    },
    _icons: {
        marginLeft: 30,
        marginTop: 5
    },
    _area_address: {
        fontSize: 11,
        paddingLeft: 10
    },
    _rating: {
        width: 190,
        marginTop: -15,
    },
    _skills_show: {
        borderColor: "#FF5757",
        borderWidth: 2,
        borderRadius: 20,
        width: "48%",
        alignItems: "center",
        padding: 3
    },
    _skills_txt: {
        fontSize: 14,
        color: "gray"
    },
    _see_more: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "48%"
    },
    _see_more_btn_txt: {
        borderBottomColor: "#FF5757",
        borderBottomWidth: 1,
        color: "#FF5757",
        fontSize: 13
    }





});

export default Mentors;