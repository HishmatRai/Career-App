import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, ScrollView, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Login = (props) => {
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
            <ScrollView>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  GETSTAT SECTION  LOGO  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <View style={styles._logo}>
                    <Image source={require('./../../assets/logo2.png')} />
                </View>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  LOGIN SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <View style={styles._login_username_input}>
                    <FontAwesome name="user" size={24} color="red" style={styles._icons} />
                    <TextInput
                        style={styles._input}
                        placeholder="User Name"
                    />
                </View>
                <View style={styles._login_password_input}>
                    <Ionicons name="ios-lock" size={24} color="red" style={styles._icons} />
                    <TextInput
                        style={styles._input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  LOGIN SIGNUP BUTTON  SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <View style={styles._login_button_main_view}>

                    <TouchableOpacity style={styles._button}
                        onPress={() => props.navigation.navigate("CareerSearch")}>
                        <Text style={styles._button_txt}>Sign In</Text></TouchableOpacity>

                    <TouchableOpacity style={styles._button2}
                        onPress={() => props.navigation.navigate("CareerSearch")}
                    >

                        <Text style={styles._button_txt}>Sign Up</Text></TouchableOpacity>
                </View>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  FORGOT PASSWORD  SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}


                <TouchableOpacity style={styles._forgot_button}><Text style={styles._forgotbutton_txt}>Forgot your password?</Text></TouchableOpacity>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  LOGIN WITH LONKDIN  SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <View style={styles._lonkdin_login_main_view}>
                    <Text style={styles._or}>Or</Text>
                    <Text style={{ color: "#006DB3", fontSize: 25 }}>Sign In With</Text>
                    <TouchableOpacity>
                        <AntDesign name="linkedin-square" size={60} color="#0161A5" />
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  SIGN UP AS A MENTOR SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                <View style={{ alignItems: "flex-end", marginRight: 20, marginTop: 20 }}>
                    <TouchableOpacity style={{ flexDirection: "row" }}
                        onPress={() => props.navigation.navigate("CareerSearch")}
                    >
                        <Entypo name="log-out" size={24} color="#FF5757" />
                        <Text style={{ color: "#FF5757" }}>Sign up as a Mentor</Text>
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

    _logo: {
        marginTop: -25,
        justifyContent: "center",
        alignItems: "center"
    },
    _login_username_input: {
        flexDirection: "row",
        borderBottomColor: '#FF6262',
        borderBottomWidth: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    _login_password_input: {
        flexDirection: "row",
        borderBottomColor: '#FF6262',
        borderBottomWidth: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40
    },
    _icons: {
        marginLeft: 10,
        paddingBottom: 10
    },
    _input: {
        width: "80%",
        marginLeft: 10,
        paddingBottom: 10
    },
    _login_button_main_view: {
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 40
    },
    _button: {
        backgroundColor: "#FF5757",
        width: "47%",
        justifyContent: "center",
        borderRadius: 20,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        elevation: 1,
        shadowOpacity: 0.1,

    },
    _button2: {
        backgroundColor: "#FF5757",
        width: "47%",
        borderRadius: 20,
        marginLeft: "6%",
        padding: 5, borderColor: 'black',
        borderWidth: 2,
        elevation: 1,
        shadowOpacity: 0.1


    },

    _button_txt: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20

    },
    _forgot_button: {
        marginLeft: 20,
        marginTop: 20
    },
    _forgotbutton_txt: {
        color: "gray",
        fontSize: 18
    },
    _lonkdin_login_main_view: {
        alignItems: "center"
    },
    _or: {
        color: "#FF5757",
        fontWeight: "normal",
        fontSize: 25,
        marginTop: 5

    }



});

export default Login;