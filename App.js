import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Getstart from './src/screens/getstart'
import Navigation from './src/navigation/navigation'
class App extends Component {
  constructor() {
    super()
    this.state = {
      showMe: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showMe: false
      })
    },
      4000)

  }
  render() {

    return (
      <>
        {this.state.showMe ?
          <Getstart />
          :
          <View style={styles.container}>
            <Navigation />
          </View>
        }
      </>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
})
export default App