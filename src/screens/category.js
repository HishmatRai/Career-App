import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from '../components/datepicker'
import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Category = (props) => {
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
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Category</Text>
                </TouchableOpacity>
                <Image source={require('./../../assets/logo.png')} style={styles._logo} />
                <TouchableOpacity style={{ marginLeft: 30 }}>
                    <AntDesign name="search1" size={24} color="#FF5757" />
                </TouchableOpacity>
                <TouchableOpacity >
                    <FontAwesome name="user" size={24} color="#FF5757" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="md-notifications-outline" size={24} color="#FF5757" />
                </TouchableOpacity>
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  ADD DATA SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={styles._add_data_main}>
                    <TouchableOpacity style={styles._career_category_btn}>
                        <Text style={styles._career_category_btn_txt}>Career Category 1</Text>
                    </TouchableOpacity>

                    {/* <<<<<<<<<<<<<<<<  Discription >>>>>>>>>>>>>>>> */}
                    <Text style={styles._heading}>Discription</Text>
                    <TextInput style={styles._disc_input}
                        numberOfLines={10}
                        multiline={true}
                    />

                    {/* <<<<<<<<<<<<<<<<  Education >>>>>>>>>>>>>>>> */}
                    <Text style={styles._heading}>Education</Text>
                    <TextInput style={styles._disc_input}
                        numberOfLines={10}
                        multiline={true}
                    />

                     {/* <<<<<<<<<<<<<<<<  Started >>>>>>>>>>>>>>>> */}
                     <Text style={styles._heading}>How to get Started</Text>
                    <TextInput style={styles._disc_input}
                        numberOfLines={10}
                        multiline={true}
                    />

                       {/* <<<<<<<<<<<<<<<<  Started >>>>>>>>>>>>>>>> */}
                       <Text style={styles._heading}>Salary Range</Text>
                    <TextInput style={styles._salary_input}
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={{marginBottom:100}}></View>
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
    _add_data_main: {
        margin: 20
    },
    _career_category_btn: {
        backgroundColor: "#FF5757",
        borderRadius: 5,
        marginBottom: 10
    },
    _career_category_btn_txt: {
        color: "white",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: "bold"
    },
    _disc_input: {
        borderColor: "#FF5757",
        borderWidth: 2,
        height: 80,
        backgroundColor: "#FED4D4",
        borderRadius: 10,
        padding: 10
    },
    _heading: {
        marginBottom: 5,
        paddingLeft: 6,
        fontWeight: 'normal',
        marginTop:10
    },
    _salary_input:{
        borderColor: "#FF5757",
        borderWidth: 2,
        height: 40,
        backgroundColor: "#FED4D4",
        borderRadius: 10,
        padding: 10
    }



});

export default Category;