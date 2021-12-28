import React, { Component } from 'react';

import {
  Image,
  Animated
} from 'react-native';

class AniImage extends Component {
  render() {

    const { styles, url } = this.props

    this.animatedValue = new Animated.Value(0)

    const imgAnimation = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1]
    })

    return (
      <Animated.Image
        onLoadEnd={ () => {
          Animated.timing(this.animatedValue, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false
          }).start()
        } }
        source={{ url }}
        style={ [ styles, { opacity: imgAnimation } ] }
      />
    );
  }
}


export default AniImage
