import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, Picker, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from '../components/datepicker'
import { AntDesign } from '@expo/vector-icons';
import ToggleButton from './../components/toggle_button'
import Dropdownw from '../components/datepicker'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Profile = (props) => {
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
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Profile</Text>
                </TouchableOpacity>
                {/* <Image source={require('./../../assets/logo.png')} style={styles._logo} /> */}
                <TouchableOpacity style={{ marginLeft: 180 }}>
                    <AntDesign name="search1" size={24} color="#FF5757" />
                </TouchableOpacity>

            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Profile  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <View style={{ alignItems: "center" }}>
                        {/* <<<<<<<<<<<<<<<  User Profile >>>>>>>>>>>> */}
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("CameraScreen")}
                        >
                            <Image source={require('./../../assets/profile.png')} style={styles._profile} />
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<  User Name >>>>>>>>>>>> */}
                        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
                            <Text style={styles._user_name}>Johan Smith</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<  First Name >>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "space-between" }}>
                        <Text style={styles._first_name}>First Name</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>Johan</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<  Last Name >>>>>>>>>>>> */}
                    <View style={styles._user_details_main}>
                        <Text style={styles._first_name}>Last Name</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>Smith</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<< Email >>>>>>>>>>>> */}
                    <View style={styles._user_details_main}>
                        <Text style={styles._first_name}>Email</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>johan@gmail.com</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity>
                    </View>


                    {/* <<<<<<<<<<<<<<< Phone >>>>>>>>>>>> */}
                    <View style={styles._user_details_main}>
                        <Text style={styles._first_name}>Phone</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>+88012345699</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<< Date of Birth >>>>>>>>>>>> */}
                    <View style={styles._user_details_main}>
                        <Text style={styles._first_name}>Date Of Birth</Text>
                        {/* <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>+88012345699</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity> */}
                        <View style={styles._date_picker}>

                            <Dropdown />
                        </View>
                    </View>


                    {/* <<<<<<<<<<<<<<< Locaion >>>>>>>>>>>> */}
                    <View style={styles._user_details_main}>
                        <Text style={styles._first_name}>Locaion</Text>
                        {/* <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>+88012345699</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity> */}
                    </View>
                    {/* dropdown */}
                    <View style={styles._dropdown}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 30, width: "90%" }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Select" value="java" />
                            <Picker.Item label="Select" value="js" />
                        </Picker>
                    </View>

                    {/* <<<<<<<<<<<<<<<  Area Of Interest >>>>>>>>>>>> */}
                    <View style={{ marginTop: 30 }}></View>
                    <View style={{ flexDirection: "row", marginTop: 40, justifyContent: "space-between" }}>
                        <Text style={styles._first_name}>Area Of Interest</Text>
                        {/* <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._user_first_name}>Johan</Text>
                            <MaterialIcons name="edit" size={20} color="#FF5757" />
                        </TouchableOpacity> */}
                    </View>
                    {/* dropdown */}
                    <View style={styles._dropdown2}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 30, width: "90%" }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Select" value="java" />
                            <Picker.Item label="Select" value="js" />
                        </Picker>
                    </View>

                    {/* <<<<<<<<<<<<<<<  Linkedin >>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", marginTop: 70, justifyContent: "space-between" }}>
                        <Text style={styles._linkedin}>Linkedin</Text>
                        <ToggleButton />
                    </View>

                    {/* <<<<<<<<<<<<<<< Save button >>>>>>>>>>>> */}
                    <View style={{ alignItems: "center", marginTop: 50 }}>
                        <TouchableOpacity style={styles._save_button}>
                            <Text style={styles._save_button_text}>Save</Text>
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
        marginRight: 20
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
    _dropdown: {
        marginRight: "2%",
        marginLeft: "60%",
        borderRadius: 30,
        color: "red",
        textAlign: "center",
        justifyContent: "center",
        color: "white",
        // backgroundColor:"red",
        marginTop: -50,

    },
    _dropdown2: {
        marginRight: "2%",
        marginLeft: "60%",
        borderRadius: 30,
        color: "red",
        textAlign: "center",
        justifyContent: "center",
        color: "white",
        // backgroundColor:"red",
        marginTop: -30,

    },


});

export default Profile;