'use strict';

import React, { Component } from 'react';

import { directToPage } from '../../utils/extension'

import {
  Image,
  TouchableWithoutFeedback
} from 'react-native';

class SwiperItem extends Component {
  render() {
    const { data, styles, navigation } = this.props

    const toDetailPage = () => {
      directToPage(navigation, 'DetailPage', {
        courseId: data.course_id
      })
    }

    return (
      <TouchableWithoutFeedback
        style={styles.swiperSize}
        onPress={toDetailPage}
      >
        <Image
          style={ styles.swiperSize }
          source={{ url: data.img }}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default SwiperItem;
