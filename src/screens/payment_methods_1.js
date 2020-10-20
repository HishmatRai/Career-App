import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Chackbox from './../components/checkbox'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const PaymentMethods1 = (props) => {
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
                    <Text style={{ color: "#FF5757", fontSize: 16, marginLeft: 20 }}>Payment Methods</Text>
                </TouchableOpacity>
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Visa logo    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

            <ScrollView >
                <View style={{ margin: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Image source={require('./../../assets/visa.png')} style={styles._logo} />
                        <Ionicons name="ios-checkmark-circle-outline" size={24} color="#005AEE" style={{ marginRight: 20 }} />
                    </View>

                    <View style={styles._add_card_details_main}>

                        {/* <<<<<<<<<<<<<<<< scan card button >>>>>>>>>>> */}
                        <TouchableOpacity style={styles._scan_button}>
                            <Text style={styles._scan_button_text}>Scan Card</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, marginTop: 10, textAlign: "center" }}>or</Text>

                        {/* <<<<<<<<<<<<<<<< card number >>>>>>>>>>> */}
                        <TextInput
                            style={styles._input}
                            placeholder="CARD NUMBER"
                            keyboardType='numeric'
                        />

                        {/* <<<<<<<<<<<<<<<< card name >>>>>>>>>>> */}
                        <TextInput
                            style={styles._input}
                            placeholder="CARDHOLDER'S NAME"
                        />

                        {/* <<<<<<<<<<<<<<<< check box  >>>>>>>>>>> */}
                        <View style={{ flexDirection: "row" }}>
                            <Chackbox />
                            <Text style={styles._checkbox}>Save credit card information</Text>
                        </View>

                        {/* <<<<<<<<<<<<<<<< nexr stap button >>>>>>>>>>> */}
                        <TouchableOpacity style={styles._next_stap}
                        onPress={() => props.navigation.navigate("PaymentMethods2")}
                        >
                            <Text style={styles._next_stap_text}>Next Stap</Text>
                        </TouchableOpacity>

                        {/* <<<<<<<<<<<<<<<< back button >>>>>>>>>>> */}
                        <TouchableOpacity style={styles._scan_button}
                        onPress={() => props.navigation.goBack()}
                        >
                            <Text style={styles._scan_button_text}>Back</Text>
                        </TouchableOpacity>
                        <View style={{ paddingBottom: 20 }}></View>
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
        flexDirection: "row",
        marginTop: 24,
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: "center",
        textAlign: "center",
        height: 60
    },

    _logo: {
        marginLeft: 20,
        width: 73,
        height: 24
    },
    _add_card_details_main: {
        elevation: 18,
        backgroundColor: "white",
        padding: 10,
        marginTop: 30,
    },
    _scan_button: {
        borderColor: "#FF5757",
        borderWidth: 1,
        width: "90%",
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 10

    },
    _scan_button_text: {
        color: "#FF5757",
        textAlign: "center",
        marginTop: 8,
        marginBottom: 8,
        fontSize: 16
    },
    _next_stap: {
        backgroundColor: "#FF5757",
        width: "90%",
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 10

    },
    _next_stap_text: {
        color: "white",
        textAlign: "center",
        marginTop: 8,
        marginBottom: 8,
        fontSize: 16
    },
    _input: {
        borderColor: "#C3CFE2",
        borderWidth: 1,
        width: "90%",
        borderRadius: 5,
        marginLeft: 15,
        padding: 8,
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 20
    },
    _checkbox: {
        marginTop: 23,
        marginLeft: -10,
        fontSize: 12
    }




});

export default PaymentMethods1;