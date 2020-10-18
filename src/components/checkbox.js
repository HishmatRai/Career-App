// import CheckboxField from 'react-native-checkbox-field'; // Field with label
// import { Checkbox } from 'react-native-checkbox-field'; // Checkbox only
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CheckboxField from 'react-native-checkbox-field';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Form extends Component {
    state = {
        selected: false,
    };

    selectCheckbox = () => {
        this.setState({
            selected: !this.state.selected,
        });
    };

    render() {
        const { selected } = this.state;

        // Only onSelect prop is required
        return (
            <CheckboxField
                onSelect={this.selectCheckbox}
                selected={selected}
                // label="Save credit card information"
                labelSide="right"
                style={{ marginLeft: -200 }}
            >
                <Icon name="check" color="#fff" />
            </CheckboxField>
        )
    }
}