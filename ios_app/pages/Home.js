'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  ScrollView
} from 'react-native';

import IndexModel from '../models/Index'
import IndexSwiper from '../components/IndexSwiper'


const indexModel = new IndexModel()

class HomePage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: []
    }
  }

  getCourseDatas () {
    indexModel.getCourseDatas().then(res => {
      const data = res.result
      this.setState({
        swiperData: data.swipers,
        fieldData: data.fields,
        courseData: data.courses,
        recomCourseData: data.recomCourses
      })
      console.log(this.state)
    })
  }

  componentDidMount () {
    this.getCourseDatas()
  }

  render() {

    const { navigation } = this.props
    const { swiperData } = this.state

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
      >
        <IndexSwiper
          swiperData={swiperData}
          navigation={navigation}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});


export default HomePage;