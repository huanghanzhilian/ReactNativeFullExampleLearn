import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

import styles from './styles'

class index extends Component {
  render() {
    return (
      <View style={ styles.pageLoading }>
        <Image
          style={ styles.loadingPic }
          source={ require('../../assets/img/loading.gif') }
        />
      </View>
    );
  }
}


export default index
