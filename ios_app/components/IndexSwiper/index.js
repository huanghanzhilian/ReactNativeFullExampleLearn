'use strict';

import React, { Component } from 'react';


import {
  View,
  Text
} from 'react-native';

import Swiper from 'react-native-swiper'

import styles from './styles'
import SwiperItem from './SwiperItem'

class IndexSwiper extends Component {
  render() {
    const { swiperData, navigation } = this.props,
          swiperHeight = styles.swiperSize.height

    return (
      <View
        height={swiperHeight}
      >
        <Swiper
          height={swiperHeight}
          autoplay={true}
          loop={true}
          activeDotColor={'#fff'}
          paginationStyle={styles.pagination}
        >
          {
            swiperData.map((item, index) => {
              return (
                <SwiperItem
                  data={item}
                  key={index}
                  navigation={navigation}
                  styles={styles}
                />
              )
            })
          }
        </Swiper>
      </View>
    );
  }
}

export default IndexSwiper;
