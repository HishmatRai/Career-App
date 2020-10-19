import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, Picker, ScrollView } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from '../components/datepicker'
import { AntDesign } from '@expo/vector-icons';
import ToggleButton from './../components/toggle_button'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Earnings = (props) => {
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
                <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                >
                    <Ionicons name="md-arrow-round-back" size={24} color="#FF5757" />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Earnings</Text>
                </TouchableOpacity>
                {/* <Image source={require('./../../assets/logo.png')} style={styles._logo} /> */}
                <TouchableOpacity style={{ marginLeft: 130 }}>
                    <Text style={{ color: "#FF5757" }}>Withdraw</Text>
                </TouchableOpacity>

            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Profile  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <View style={{ alignItems: "center" }}>
                        {/* <<<<<<<<<<<<<<<  Personal Balance  >>>>>>>>>>>> */}
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <Text style={styles._user_name}>$40</Text>
                            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 10 }}>Personal Balance</Text>

                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<  Earning in Month >>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "space-between" }}>
                        <Text style={styles._earning_in_month}>Earning in Month</Text>
                        {/* <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>Johan</Text>

                        </TouchableOpacity> */}
                    </View>

                    {/* dropdown */}
                    <View style={styles._dropdown}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 30, width: "90%" }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="January" value="java" />
                            <Picker.Item label="Febuary" value="js" />
                        </Picker>
                    </View>
                    {/* <<<<<<<<<<<<<<<  Videos >>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <Text style={styles._video_section}>Video Session</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._price}>$35</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<  Likes >>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <Text style={styles._video_section}>Likes (2000)</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._price}>$2</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<  Videos >>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <Text style={styles._video_section}>Chat Session</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._price}>$3</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginBottom: 30 }}></View>
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
        borderBottomColor: "#FF5757",
        borderBottomWidth: 1,
        flexDirection: "row",
        marginTop: 24,
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: "center",
        textAlign: "center",
        height: 60
    },
    _profile_main: {
        width: 79,
        height: 79,
        borderRadius: 100,
        marginTop: 20
    },
    _profile: {
        width: 79,
        height: 79,
        borderRadius: 100,
    },
    _user_name: {
        color: "#FF5757",
        fontSize: 18,
        marginRight: 20,
        textAlign: "center"
    },
    _first_name: {
        color: "#FF5757",
        fontSize: 18
    },
    _user_first_name: {
        color: "gray",
        fontSize: 18,
        marginRight: 20
    },
    _user_details_main: {
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "space-between",
        borderBottomColor: "#FF5757",
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    _linkedin: {
        color: "#006DB0",
        fontSize: 18
    },
    _save_button: {
        backgroundColor: "#FF5757",
        width: "40%",
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 1
    },
    _save_button_text: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        paddingBottom: 5
    },
    _earning_in_month: {
        color: "black",
        fontSize: 15
    },
    _price: {
        color: "#FF5757",
        marginRight: 30
    },
    _video_section: {
        color: "black",
        fontSize: 13
    },
    _dropdown: {
        marginRight: "2%",
        marginLeft: "55%",
        borderRadius: 30,
        color: "red",
        textAlign: "center",
        justifyContent: "center",
        color: "white",
        // backgroundColor:"red",
        marginTop: -30,
        borderColor: "#FF5757",
        borderWidth: 1
    },


});

export default Earnings;