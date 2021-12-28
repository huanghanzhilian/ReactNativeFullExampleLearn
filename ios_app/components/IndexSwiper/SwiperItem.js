'use strict';

import React, { Component } from 'react';

import { directToPage } from '../../utils/extension'

import {
  TouchableWithoutFeedback
} from 'react-native';

import AniImage from '../AniImage'

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
        <AniImage
          styles={ styles.swiperSize }
          url={ data.img }
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default SwiperItem;
