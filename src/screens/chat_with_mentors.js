import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, TouchableOpacityBase } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Dropdown from '../components/datepicker'
import { AntDesign } from '@expo/vector-icons';
import ToggleButton from './../components/toggle_button'
import { Entypo } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const ChatWithMentors = (props) => {
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
                onPress={() => props.navigation.goBack()}>
                
                    <Entypo name="chevron-left" size={24} color="#FF5757" />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Text style={{ color: "#FF5757", fontSize: 16 }}>Chat With Mentors</Text>
                </TouchableOpacity>
                {/* <Image source={require('./../../assets/logo.png')} style={styles._logo} /> */}
                <TouchableOpacity style={{ marginLeft: 130 }}>
                    <Entypo name="plus" size={24} color="#FF5757" />
                </TouchableOpacity>

            </View>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Profile    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={{ flexDirection: "row" }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity style={styles._profile_main}
                   onPress={() => props.navigation.navigate("Profile")}>
                        <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/mentorschat2.png')} style={styles._profile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/mentorschat3.png')} style={styles._profile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/mentorschat4.png')} style={styles._profile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/mentorschat5.png')} style={styles._profile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/mentorschat6.png')} style={styles._profile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/mentorschat7.png')} style={styles._profile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles._profile_main}>
                        <Image source={require('./../../assets/mentorschat8.png')} style={styles._profile} />
                    </TouchableOpacity>

                </ScrollView>
            </View>



            <ScrollView >
                <View style={{ margin: 20,marginTop:70 }}>
                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/mentorschat2.png')} style={styles._profile_main_of_receive_message} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/first_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>fsdfdsfdfds</Text>
                        </View>
                    </View>
                    {/*<<<<<<<<<<<<<<<<<<<<<< user 2nd message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}></View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/second_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>fsdfdsf fsd fsd fs df dsfd sf sddfdsf ds fd s dfds f sdfdfds</Text>
                        </View>
                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", marginTop: 10, alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Text style={styles.first_messge_sent}>fsdfdds</Text>
                                <Image source={require('./../../assets/first_messge_sent.png')} style={{ width: 17, height: 17 }} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/mentorschat5.png')} style={styles._profile_main_of_sent_message} />
                        </View>
                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/mentorschat2.png')} style={styles._profile_main_of_receive_message} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/first_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>fsdfdsfdfds</Text>
                        </View>
                    </View>


                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", marginTop: 10, alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Text style={styles.first_messge_sent}>fsdf ds ds ds ddds</Text>
                                <Image source={require('./../../assets/first_messge_sent.png')} style={{ width: 17, height: 17 }} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/mentorschat5.png')} style={styles._profile_main_of_sent_message} />
                        </View>
                    </View>
                    {/*<<<<<<<<<<<<<<<<<<<<<< user second message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Text style={styles.first_messge_sent}>fsdf ds ds ds ddds</Text>
                                <Image source={require('./../../assets/second_messge_sent.png')} style={{ width: 17, height: 17 }} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                        </View>
                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message receive >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%" }}>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/mentorschat2.png')} style={styles._profile_main_of_receive_message} />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", width: "80%" }}>
                            <Image source={require('./../../assets/first_messge_receive.png')} style={{ width: 17, height: 17 }} />
                            <Text style={styles.first_messge_receive}>fsdfdsfdfds</Text>
                        </View>
                    </View>

                    {/*<<<<<<<<<<<<<<<<<<<<<< user first message send >>>>>>>>>>>>>>> */}
                    <View style={{ flexDirection: "row", width: "90%", marginTop: 10, alignSelf: "flex-end" }}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: "80%", alignSelf: "flex-end", justifyContent: "flex-end", marginRight: 10 }}>
                                <Text style={styles.first_messge_sent}>fsdf ds ds ds ddds</Text>
                                <Image source={require('./../../assets/first_messge_sent.png')} style={{ width: 17, height: 17 }} />
                            </View>
                        </View>
                        <View style={styles._profile_main_of_receive_message}>
                            <Image source={require('./../../assets/mentorschat5.png')} style={styles._profile_main_of_sent_message} />
                        </View>
                    </View>

                    <View style={{ marginBottom: 30 }}></View>
                </View>
            </ScrollView>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Message Option    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

            <View style={styles._message_main}>
                <View style={{ width: "10%", alignItems: "center" }}>
                    <TouchableOpacity>
                        <AntDesign name="pluscircle" size={30} color="#FF5757" style={styles._add} />
                    </TouchableOpacity>
                </View>

                <View style={styles._type_message}>
                    <TextInput
                        style={styles._input}
                        placeholder="Chat Message"
                    />
                    <TouchableOpacity>
                        <Ionicons name="md-send" size={30} color="#FF5757" />
                    </TouchableOpacity>
                </View>
            </View>
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
    _profile_main: {
        width: 46,
        height: 46,
        borderRadius: 100,
        marginRight: 10,
    },
    _profile: {
        width: 46,
        height: 46,
        borderRadius: 100,
    },
    _message_main: {
        width: "90%",
        position: "absolute",
        bottom: 20,
        marginLeft: "5%",
        marginRight: "5%",
        flexDirection: 'row',
        backgroundColor: "white",
    },
    _type_message: {
        borderRadius: 100,
        borderColor: "#707070",
        borderWidth: 1,
        flexDirection: 'row',
        width: "89%",
        marginLeft: "1%",
        alignItems: "center"
    },
    _input: {
        width: "75%",
        marginLeft: 15,
        paddingBottom: 5,
        paddingTop: 5,
        marginRight: 20
    },
    _add: {
        paddingBottom: 5,
        paddingTop: 5,
    },
    _profile_main_of_receive_message: {
        width: 46,
        height: 46,
        borderRadius: 100,
        marginRight: 5

    },
    _profile_main_of_sent_message: {
        width: 46,
        height: 46,
        borderRadius: 100,
        marginRight: 5

    },
    first_messge_receive: {
        backgroundColor: "#FF5757",
        borderRadius: 100,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: -10,
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    first_messge_sent: {
        backgroundColor: "#FF5757",
        borderRadius: 100,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: -10,
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    }



});

export default ChatWithMentors;