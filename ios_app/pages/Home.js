'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class HomePage extends Component {
  render() {

    const { navigation } = this.props

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomePage Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('DetailPage')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default HomePage;