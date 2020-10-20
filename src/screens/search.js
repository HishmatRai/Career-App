import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView, Picker } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Search = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };
    const [selectedValue, setSelectedValue] = useState("java");
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
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Search</Text>
                </TouchableOpacity>
                <Image source={require('./../../assets/logo.png')} style={styles._logo} />
                <TouchableOpacity style={{ marginLeft: 30 }}>
                    <FontAwesome name="user" size={24} color="#FF5757" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="md-notifications-outline" size={24} color="#FF5757" />
                </TouchableOpacity>


            </View>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  DROPDOWN SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                {/* dropdown */}
                <View style={styles._dropdown}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 40, width: "90%" }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Search & Add To List" value="java" />
                        <Picker.Item label="Search & Add To List" value="js" />
                    </Picker>
                </View>
                {/* Chips */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 20, marginLeft: 20, marginTop: 30 }}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Traveling</Text>
                        <Entypo name="cross" size={20} color="gray" style={styles._iocns} />
                    </TouchableOpacity >
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Traveling</Text>
                        <Entypo name="cross" size={20} color="gray" style={styles._iocns} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Traveling</Text>
                        <Entypo name="cross" size={20} color="gray" style={styles._iocns} />

                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 20, marginLeft: 20, marginTop: 10 }}>
                    <TouchableOpacity style={styles._chips}>
                        <Text style={styles._chips_text}>Traveling</Text>
                        <Entypo name="cross" size={20} color="gray" style={styles._iocns} />
                    </TouchableOpacity >
                </View>


                {/* dropdown */}
                <View style={styles._dropdown}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 40, width: "90%" }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Location (City Or Zip Code)" value="java" />
                        <Picker.Item label="Location (City Or Zip Code)" value="js" />
                    </Picker>
                </View>

                {/* dropdown */}
                <View style={{ marginTop: 20 }}></View>
                <View style={styles._dropdown}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 40, width: "90%" }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Country" value="java" />
                        <Picker.Item label="Country" value="js" />
                    </Picker>
                </View>

                {/* dropdown */}
                <View style={{ marginTop: 20 }}></View>
                <View style={styles._dropdown}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 40, width: "90%" }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Minimum Salary" value="java" />
                        <Picker.Item label="Minimum Salary" value="js" />
                    </Picker>
                </View>

                <TouchableOpacity style={styles._serach_button}>
                    <Text style={styles._search_button_text}>Search</Text>
                </TouchableOpacity>
            </ScrollView>
            {/* save button */}

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
        height: 80
    },
    _logo: {
        width: 80,
        height: 80,
    },
    _dropdown: {
        flex: 1,
        backgroundColor: "#FF5757",
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 30,
        marginTop: 20,
        color: "red",
        textAlign: "center",
        justifyContent: "center",
        color: "white"
    },
    _dropdown2: {
        // flex: 1,
        backgroundColor: "#FF5757",
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 30,
        marginTop: -550,
        color: "red",
        textAlign: "center",
        justifyContent: "center",
        color: "white"
    },
    _chips: {
        borderColor: "#FF5757",
        borderWidth: 1,
        flexDirection: "row",
        borderRadius: 100

    },
    _chips_text: {
        color: "gray",
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10
    },
    _iocns: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5
    },
    _serach_button: {
        backgroundColor: "#FF5757",
        marginTop: 40,
        width: "50%",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 50,
        padding: 5
    },
    _search_button_text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 17,
        paddingTop: 5,
        paddingBottom: 5
    }
});

export default Search;