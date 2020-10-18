import React from 'react';
import {
    Button,
    Text,
    TextInput,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
// import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
// import RNPickerSelect, { defaultStyles } from './debug';

const sports = [
    {
        label: 'Football',
        value: 'football',
    },
    {
        label: 'Baseball',
        value: 'baseball',
    },
    {
        label: 'Hockey',
        value: 'hockey',
    },
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {
            firstTextInput: null,
            favSport0: null,
            favSport1: null,
            lastTextInput: null,
            favSport5: null,
        };

        this.state = {
            numbers: [
                {
                    label: '1',
                    value: 1,
                    color: 'orange',
                },
                {
                    label: '2',
                    value: 2,
                    color: 'red',
                },
            ],
            favSport0: undefined,
            favSport1: undefined,
            favSport2: undefined,
            favSport3: undefined,
            favSport4: 'baseball',
            previousFavSport5: undefined,
            favSport5: null,
            favNumber: undefined,
        };

        this.InputAccessoryView = this.InputAccessoryView.bind(this);
    }

    InputAccessoryView() {
        return (
            <View style={defaultStyles.modalViewMiddle}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState(
                            {
                                favSport5: this.state.previousFavSport5,
                            },
                            () => {
                                this.inputRefs.favSport5.togglePicker(true);
                            }
                        );
                    }}
                    hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                    <View testID="needed_for_touchable">
                        <Text
                            style={[
                                defaultStyles.done,
                                { fontWeight: 'normal', color: 'red' },
                            ]}>
                            Cancel
            </Text>
                    </View>
                </TouchableWithoutFeedback>
                {/* <Text>Name | Prefer</Text> */}
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.inputRefs.favSport5.togglePicker(true);
                    }}
                    hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                    <View testID="needed_for_touchable">
                        <Text style={defaultStyles.done}>Done</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    render() {
        const placeholder = {
            label: 'Search & Add To List',
            value: null,
            color: '#9EA0A4',
        };

        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContentContainer}>


                    {/* and iOS onUpArrow/onDownArrow toggle example */}
                    <RNPickerSelect
                        placeholder={placeholder}
                        items={sports}
                        onValueChange={value => {
                            this.setState({
                                favSport0: value,
                            });
                        }}
                        onUpArrow={() => {
                            this.inputRefs.firstTextInput.focus();
                        }}
                        onDownArrow={() => {
                            this.inputRefs.favSport1.togglePicker();
                        }}
                        style={pickerSelectStyles}
                        value={this.state.favSport0}
                        ref={el => {
                            this.inputRefs.favSport0 = el;
                        }}
                    />

                    <View paddingVertical={5} />


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    scrollContainer: {
        // flex: 1,
        // paddingHorizontal: 15,
    },
    // scrollContentContainer: {
    //     paddingTop: 40,
    //     paddingBottom: 10,
    // },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        height: 30,
        paddingRight: 30,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
});
