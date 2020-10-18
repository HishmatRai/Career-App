import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, TouchableOpacityBase, ScrollView } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from './../components/dropdown'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Settings = (props) => {
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
                    <Text style={{ color: "#FF5757", fontSize: 20, marginRight: 200 }}>Settings</Text>
                </TouchableOpacity>

            </View>



            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  NOTOFICATION SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>

                <View style={{ margin: 20 }}>
                    {/* <<<<<<<<<<<<<<<<<<<    Export Data  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <FontAwesome5 name="file-export" size={20} color="#FF5757" />
                            <Text style={styles._expot_data}>Export Data</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._mentor}>Mentor</Text>
                            <Entypo name="chevron-right" size={20} color="#FF5757" />
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<    Account Setting  >>>>>>>>>>>>>>>>>> */}
                    <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
                        <MaterialCommunityIcons name="account-edit" size={24} color="#FF5757" />
                        <Text style={styles._expot_data}>Account Settings</Text>
                    </TouchableOpacity>

                    {/* <<<<<<<<<<<<<<<<<<<    Change Name  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={styles._change_Name}>Change Name</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Feather name="edit-3" size={20} color="#FF5757" />
                            <Text style={styles._edit}>Edit</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<    Change Password  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={styles._change_Name}>Change Password</Text>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Feather name="edit-3" size={20} color="#FF5757" />
                            <Text style={styles._edit}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomColor: "#FF5757", borderBottomWidth: 1, marginTop: 10, marginBottom: 10 }}></View>

                    {/* <<<<<<<<<<<<<<<<<<<   Notification Setting  >>>>>>>>>>>>>>>>>> */}
                    <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
                        <Feather name="edit" size={20} color="#FF5757" />
                        <Text style={styles._expot_data}>Notification Settings</Text>
                    </TouchableOpacity>

                    {/* <<<<<<<<<<<<<<<<<<<    Reminders  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-notifications-outline" size={20} color="#FF5757" />
                            <Text style={styles._reminders}>Reminders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._mentor}>Button</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<    New  Message  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Feather name="message-circle" size={15} color="#FF5757" />
                            <Text style={styles._new_message}>New Messages</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._mentor}>Button</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<    New Chat Message  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-chatboxes" size={18} color="#FF5757" />
                            <Text style={styles._new_message}>New Chat Messages</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._mentor}>Button</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<    Missed video Calls  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-videocam" size={20} color="#FF5757" />
                            <Text style={styles._help_center}>Missed video Calls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={styles._mentor}>Button</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   Subscription  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <MaterialIcons name="subscriptions" size={15} color="#FF5757" />
                            <Text style={styles._help_center}>Subscription</Text>
                        </TouchableOpacity>

                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   Help  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-help-circle-outline" size={20} color="#FF5757" />
                            <Text style={styles._help_center}>Help Center</Text>
                        </TouchableOpacity>

                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   FAQ  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-help-circle-outline" size={20} color="#FF5757" />
                            <Text style={styles._help_center}>FAQ</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   Instuctions  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-help-circle-outline" size={20} color="#FF5757" />
                            <Text style={styles._help_center}>Instuctions</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   About Us  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-help-circle-outline" size={20} color="#FF5757" />
                            <Text style={styles._help_center}>About Us</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   Share with friends  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <FontAwesome name="share-alt" size={18} color="#FF5757" />
                            <Text style={styles._help_center}>Share with friends</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   Rating $ Reviews  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <FontAwesome name="share-alt" size={18} color="#FF5757" />
                            <Text style={styles._help_center}>Rating & Reviews</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<    Report Bug  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Ionicons name="ios-videocam" size={20} color="#FF5757" />
                            <Text style={styles._help_center}>Report Bug</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles._issue}>Find an issue? Let us know</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   Payment Mothod  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <FontAwesome name="share-alt" size={18} color="#FF5757" />
                            <Text style={styles._help_center}>Payment Method</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<<<<<<<<<<<<<   Earnings  >>>>>>>>>>>>>>>>>> */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <FontAwesome name="share-alt" size={18} color="#FF5757" />
                            <Text style={styles._help_center}>Earnings </Text>
                        </TouchableOpacity>
                    </View>
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
    _expot_data: {
        fontSize: 17,
        marginLeft: 10
    },
    _mentor: {
        fontSize: 14,
        marginRight: 10
    },
    _change_Name: {
        fontSize: 14
    },
    _edit: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 5
    },
    _reminders: {
        fontSize: 14,
        marginLeft: 20
    },
    _new_message: {
        fontSize: 14,
        marginLeft: 18,
        marginTop: -3
    },
    _help_center: {
        fontSize: 14,
        marginLeft: 18,
    },
    _issue: {
        color: "#FF5757",
        borderBottomWidth: 1,
        borderBottomColor: "#FF5757"
    }






});

export default Settings;