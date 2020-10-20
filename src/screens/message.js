import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, Image, StatusBar, TouchableOpacity, Picker, ScrollView, TextInput, TouchableOpacityBase } from "react-native";
import { Zocial } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Messsage = (props) => {
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
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="#FF5757" />

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  HEADER SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}>
                    <Ionicons name="md-arrow-round-back" size={24} color="#FF5757" />
                </TouchableOpacity >
                <TouchableOpacity>
                    <Text style={{ color: "#FF5757", fontSize: 20 }}>Message</Text>
                </TouchableOpacity>
                {/* <Image source={require('./../../assets/logo.png')} style={styles._logo} /> */}
                <TouchableOpacity style={{ marginLeft: 130 }}
                    onPress={() => props.navigation.navigate("Profile")}>

                    <FontAwesome name="user" size={24} color="#FF5757" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Notification")}>
                    <Ionicons name="md-notifications-outline" size={24} color="#FF5757" />
                </TouchableOpacity>
            </View>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  DROPDOWN SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            {/* dropdown */}
            {/* <View style={{ marginTop: 20 }}></View>
            <View style={styles._dropdown}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 40, width: "90%" }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="All Activity" value="java" />
                    <Picker.Item label="All Activity" value="js" />
                </Picker>
            </View> */}

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INBOX MESSAGE SECTION  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                {/* >>>>>>>>>> SEARCH  <<<<<<<<< */}
                <View style={styles._search_main}>
                    <TextInput
                        style={styles._input}
                        placeholder="Password"
                    />
                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <AntDesign name="search1" size={24} color="#FF5757" />
                    </TouchableOpacity>
                </View>

                {/* >>>>>>>>>>>>>>>>>>>>   user profile <<<<<<<<<<<<<<<<<<<< */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 30 }}>
                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>

                    <View style={{ alignItems: "center", alignSelf: "center", justifyContent: "center", marginRight: 5, textAlign: "center" }}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                        <Text style={styles._counter}>90+</Text>
                        <Text style={styles._name}>John...</Text>
                    </View>


                </ScrollView>

                {/* <<<<<<<<<<<<<<<<<<   comment main >>>>>>>>>>>>>>>> */}
                <View style={styles._comment_main}>
                    {/* >>>>>>  profile  <<<<<< */}
                    <View style={styles._comment_profile_main}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>  comment  <<<<<< */}
                    <View style={styles._comment_show_main}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
                                    <FontAwesome name="caret-left" size={15} color="#FF5757" style={{ marginTop: 5 }} />
                                    <Text style={{ color: "#FF5757", fontWeight: "bold", marginLeft: 5, fontSize: 17 }}>John Smith</Text>
                                </View>
                                <Text style={{ color: "gray" }}>Career Coach</Text>
                            </View>
                            <Text style={{ color: "gray", marginRight: 10 }}>2m</Text>
                        </View>

                        <View style={{ marginTop: 10, marginRight: 10 }}>
                            <Text style={{ color: "gray", flexDirection: "row" }}> Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California
                            Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California
                            </Text>
                            <TouchableOpacity style={{ alignItems: "flex-end", alignSelf: "flex-end" }}>
                                <Text style={{ color: "gray" }}>More</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <Ionicons name="md-heart" size={20} color="#FF5757" />
                            <Text style={{ marginLeft: 10, color: "gray" }}>1</Text>
                        </View>
                    {/* >>>>>>  share like and comment  <<<<<< */}

                        <View style={styles._bottom_like_comment_Section}>
                            <TouchableOpacity style={styles._like_main}>
                                <Ionicons name="ios-heart-empty" size={20} color="#FF5757" />
                                <Text style={styles._like_text}>Like</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles._like_main}>
                                <FontAwesome name="comment-o" size={18} color="#FF5757" />
                                <Text style={styles._like_text}>1</Text>
                                <Text style={styles._like_text}>Comment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles._like_main}>
                                <Ionicons name="ios-share-alt" size={20} color="#FF5757" />
                                <Text style={styles._like_text}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                      {/* <<<<<<<<<<<<<<<<<<   comment main >>>>>>>>>>>>>>>> */}
                      <View style={styles._comment_main}>
                    {/* >>>>>>  profile  <<<<<< */}
                    <View style={styles._comment_profile_main}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>  comment  <<<<<< */}
                    <View style={styles._comment_show_main}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
                                    <FontAwesome name="caret-left" size={15} color="#FF5757" style={{ marginTop: 5 }} />
                                    <Text style={{ color: "#FF5757", fontWeight: "bold", marginLeft: 5, fontSize: 17 }}>John Smith</Text>
                                </View>
                                <Text style={{ color: "gray" }}>Career Coach</Text>
                            </View>
                            <Text style={{ color: "gray", marginRight: 10 }}>2m</Text>
                        </View>

                        <View style={{ marginTop: 10, marginRight: 10 }}>
                            <Text style={{ color: "gray", flexDirection: "row" }}> Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California
                            Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California
                            </Text>
                            <TouchableOpacity style={{ alignItems: "flex-end", alignSelf: "flex-end" }}>
                                <Text style={{ color: "gray" }}>More</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <Ionicons name="md-heart" size={20} color="#FF5757" />
                            <Text style={{ marginLeft: 10, color: "gray" }}>1</Text>
                        </View>
                    {/* >>>>>>  share like and comment  <<<<<< */}

                        <View style={styles._bottom_like_comment_Section}>
                            <TouchableOpacity style={styles._like_main}>
                                <Ionicons name="ios-heart-empty" size={20} color="#FF5757" />
                                <Text style={styles._like_text}>Like</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles._like_main}>
                                <FontAwesome name="comment-o" size={18} color="#FF5757" />
                                <Text style={styles._like_text}>1</Text>
                                <Text style={styles._like_text}>Comment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles._like_main}>
                                <Ionicons name="ios-share-alt" size={20} color="#FF5757" />
                                <Text style={styles._like_text}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                      {/* <<<<<<<<<<<<<<<<<<   comment main >>>>>>>>>>>>>>>> */}
                      <View style={styles._comment_main}>
                    {/* >>>>>>  profile  <<<<<< */}
                    <View style={styles._comment_profile_main}>
                        <TouchableOpacity style={styles._profile_main}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Image source={require('./../../assets/mentorschat1.png')} style={styles._profile} />
                        </TouchableOpacity>
                    </View>

                    {/* >>>>>>  comment  <<<<<< */}
                    <View style={styles._comment_show_main}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
                                    <FontAwesome name="caret-left" size={15} color="#FF5757" style={{ marginTop: 5 }} />
                                    <Text style={{ color: "#FF5757", fontWeight: "bold", marginLeft: 5, fontSize: 17 }}>John Smith</Text>
                                </View>
                                <Text style={{ color: "gray" }}>Career Coach</Text>
                            </View>
                            <Text style={{ color: "gray", marginRight: 10 }}>2m</Text>
                        </View>

                        <View style={{ marginTop: 10, marginRight: 10 }}>
                            <Text style={{ color: "gray", flexDirection: "row" }}> Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California
                            Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California
                            </Text>
                            <TouchableOpacity style={{ alignItems: "flex-end", alignSelf: "flex-end" }}>
                                <Text style={{ color: "gray" }}>More</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <Ionicons name="md-heart" size={20} color="#FF5757" />
                            <Text style={{ marginLeft: 10, color: "gray" }}>1</Text>
                        </View>
                    {/* >>>>>>  share like and comment  <<<<<< */}

                        <View style={styles._bottom_like_comment_Section}>
                            <TouchableOpacity style={styles._like_main}>
                                <Ionicons name="ios-heart-empty" size={20} color="#FF5757" />
                                <Text style={styles._like_text}>Like</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles._like_main}>
                                <FontAwesome name="comment-o" size={18} color="#FF5757" />
                                <Text style={styles._like_text}>1</Text>
                                <Text style={styles._like_text}>Comment</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles._like_main}>
                                <Ionicons name="ios-share-alt" size={20} color="#FF5757" />
                                <Text style={styles._like_text}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 100 }}></View>
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
                    <Ionicons name="ios-clipboard" size={24} color="#C5BFBF" style={styles._bottom_navigation_icons} />
                    <Text style={styles._bottom_navigation_text_active}>Career Boards</Text>
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
    _bottom_navigation_text_active: {
        color: "#C5BFBF",
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

    _dropdown: {
        // flex: 1,
        marginRight: "25%",
        marginLeft: "25%",
        borderRadius: 30,
        color: "red",
        textAlign: "center",
        justifyContent: "center",
        color: "white"
    },
    _search_main: {
        borderColor: "#FF5757",
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: "row",
        marginTop: 20,
        width: "90%",
        alignItems: "center",
        alignSelf: "center"
    },
    _input: {
        width: "80%",
        marginLeft: 10,
        paddingBottom: 1,
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
    _counter: {
        backgroundColor: "#FF5757",
        color: "white",
        borderRadius: 50,
        width: 40,
        textAlign: "center",
        alignSelf: "center",
        alignItems: "center",
        marginTop: -45,
        fontWeight: "bold",
        marginLeft: 20
    },
    _name: {
        marginTop: 30,
        color: "gray",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },
    _comment_main: {
        borderColor: "#FF5757",
        borderWidth: 1,
        borderRadius: 20,
        width: "90%",
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        padding: 10
    },
    _comment_profile_main: {
        width: "20%",
    },
    _comment_show_main: {
        width: "80%",
    },
    _bottom_like_comment_Section: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "90%",
        alignSelf: "center",
        paddingBottom: 20
    },
    _like_main: {
        flexDirection: "row"
    },
    _like_text: {
        color: "gray",
        paddingLeft: 5
    }

});

export default Messsage;