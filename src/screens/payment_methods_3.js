import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const PaymentMethods3 = (props) => {
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

                    <TouchableOpacity style={styles._add_card_details_main}>
                        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20, marginRight: 20, justifyContent: "space-between" }}>
                            <Image source={require('./../../assets/Paypal.png')} />
                            <TouchableOpacity style={styles._more} >
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 20 }}>
                            <Text style={styles._email}>myself@gmail.com</Text>
                            <Text style={styles._added_Date}>Added on 15/12/2017</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._add_card_details_main}>
                        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20, marginRight: 20, justifyContent: "space-between" }}>
                            <Image source={require('./../../assets/visa.png')} />
                            <TouchableOpacity style={styles._more2} >
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 20 }}>
                            <Text style={styles._email}>**** **** **** 0817</Text>
                            <Text style={styles._added_Date}>Expiry Date 10/19</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._add_card_details_main}>
                        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20, marginRight: 20, justifyContent: "space-between" }}>
                            <Image source={require('./../../assets/Mastercard.png')} />
                            <TouchableOpacity style={styles._more2} >
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 20 }}>
                            <Text style={styles._email}>**** **** **** 0817</Text>
                            <Text style={styles._added_Date}>Expiry Date 10/19</Text>
                        </View>
                    </TouchableOpacity>


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


    _add_card_details_main: {
        elevation: 18,
        backgroundColor: "white",
        // padding: 10,
        marginTop: 30,
    },

    _next_stap: {
        backgroundColor: "#FF5757",
        width: "90%",
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 40

    },
    _next_stap_text: {
        color: "white",
        textAlign: "center",
        marginTop: 8,
        marginBottom: 8,
        fontSize: 16
    },


    _more: {
        // backgroundColor: "#FF5757",
        width: 30,
        height: 30,
        alignItems: "center",
        borderRadius: 100,
        borderColor: "#FF5757",
        borderWidth: 1

    },
    _more2: {
        backgroundColor: "#FF5757",
        width: 30,
        height: 30,
        alignItems: "center",
        borderRadius: 100,


    },
    _email: {
        color: "gray",
        fontSize: 16,
        marginTop: 20

    },
    _added_Date: {
        color: "gray",
        fontSize: 12,
        marginTop: 20,
        marginBottom: 30,

    }




});

export default PaymentMethods3;