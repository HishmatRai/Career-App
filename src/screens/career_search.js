import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const CareerSearch = (props) => {
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
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Career Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 50 }}>
                    <AntDesign name="search1" size={24} color="#FF5757" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Profile")}

                >
                    <FontAwesome name="user" size={24} color="#FF5757" />
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
                                <Text style={styles._career_category_btn_txt}>Career Category 1</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles._career_name}>Career Name</Text>
                                <Text style={styles._post_date}>12 August,2018</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                                <View style={{ flexDirection: "row", paddingLeft: 13 }}>
                                    <MaterialIcons name="location-on" size={20} color="#FF5757" />
                                    <Text style={{ paddingLeft: 5, fontSize: 15 }}>Texas, USA</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ paddingRight: 20 }}>
                                        <AntDesign name="like1" size={20} color="#FF5757" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingRight: 30 }}>
                                        <Ionicons name="md-heart" size={20} color="#FF5757" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles._learn_more_btn}>
                                <Text style={{ color: "#FF5757", fontSize: 17, marginRight: 10 }}>Learn More</Text>
                                <Ionicons name="md-arrow-round-forward" size={17} color="#FF5757" style={{ paddingTop: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={{ color: "#FF5757", width: "50%", marginLeft: 5 }}>Career Board (05)</Text>
                            <Text style={{ color: "#FF5757" }}>Mentors (20)</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ color: "#FF5757", width: "50%", marginLeft: 5 }}>Top Locations (05)</Text>
                            <Text style={{ color: "#FF5757" }}>Company's Hiring (05)</Text>
                        </View>
                    </>


                    {/* <<<<<<<<<<<<<<<<  Card No 02 >>>>>>>>>>>>>>>>> */}
                    <>
                        <View style={styles._add_data_main}>
                            <TouchableOpacity style={styles._career_category_btn}>
                                <Text style={styles._career_category_btn_txt}>Career Category 2</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles._career_name}>Career Name</Text>
                                <Text style={styles._post_date}>12 August,2018</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                                <View style={{ flexDirection: "row", paddingLeft: 13 }}>
                                    <MaterialIcons name="location-on" size={20} color="#FF5757" />
                                    <Text style={{ paddingLeft: 5, fontSize: 15 }}>Texas, USA</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ paddingRight: 20 }}>
                                        <AntDesign name="like1" size={20} color="#FF5757" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingRight: 30 }}>
                                        <Ionicons name="md-heart" size={20} color="#FF5757" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles._learn_more_btn}>
                                <Text style={{ color: "#FF5757", fontSize: 17, marginRight: 10 }}>Learn More</Text>
                                <Ionicons name="md-arrow-round-forward" size={17} color="#FF5757" style={{ paddingTop: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={{ color: "#FF5757", width: "50%", marginLeft: 5 }}>Career Board (05)</Text>
                            <Text style={{ color: "#FF5757" }}>Mentors (20)</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ color: "#FF5757", width: "50%", marginLeft: 5 }}>Top Locations (05)</Text>
                            <Text style={{ color: "#FF5757" }}>Company's Hiring (05)</Text>
                        </View>
                    </>

                    {/* <<<<<<<<<<<<<<<<  Card No 03 >>>>>>>>>>>>>>>>> */}
                    <>
                        <View style={styles._add_data_main}>
                            <TouchableOpacity style={styles._career_category_btn}>
                                <Text style={styles._career_category_btn_txt}>Career Category 3</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles._career_name}>Career Name</Text>
                                <Text style={styles._post_date}>12 August,2018</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                                <View style={{ flexDirection: "row", paddingLeft: 13 }}>
                                    <MaterialIcons name="location-on" size={20} color="#FF5757" />
                                    <Text style={{ paddingLeft: 5, fontSize: 15 }}>Texas, USA</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ paddingRight: 20 }}>
                                        <AntDesign name="like1" size={20} color="#FF5757" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingRight: 30 }}>
                                        <Ionicons name="md-heart" size={20} color="#FF5757" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles._learn_more_btn}>
                                <Text style={{ color: "#FF5757", fontSize: 17, marginRight: 10 }}>Learn More</Text>
                                <Ionicons name="md-arrow-round-forward" size={17} color="#FF5757" style={{ paddingTop: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={{ color: "#FF5757", width: "50%", marginLeft: 5 }}>Career Board (05)</Text>
                            <Text style={{ color: "#FF5757" }}>Mentors (20)</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ color: "#FF5757", width: "50%", marginLeft: 5 }}>Top Locations (05)</Text>
                            <Text style={{ color: "#FF5757" }}>Company's Hiring (05)</Text>
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
                <TouchableOpacity
                onPress={() => props.navigation.navigate("Category")}
                >
                    <Ionicons name="ios-clipboard" size={24} color="white" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text}>Career Boards</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Mentors")}

                >
                    <MaterialCommunityIcons name="comment-account-outline" size={24} color="white" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text}>Mentors</Text>
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
    _logo: {
        width: 80,
        height: 80,
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
        fontWeight: "normal"
    },
    _career_name: {
        paddingLeft: 20,
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
    }





});

export default CareerSearch;