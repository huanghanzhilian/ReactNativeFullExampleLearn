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
import MainTitle from '../components/MainTitle'
import RecomCourseList from '../components/RecomCourseLise'

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

  renderMainTitle (data, title) {
    if (data) {
      return <MainTitle title={ data.field_name } />
    }

    return <MainTitle title={ title } />
  }

  componentDidMount () {
    this.getCourseDatas()
  }

  render() {

    const { navigation } = this.props
    const { swiperData, fieldData, recomCourseData } = this.state

    return (
      <ScrollView
        automaticallyAdjustContentInsets={ false }
        showsVerticalScrollIndicator={ false }
      >
        <IndexSwiper
          swiperData={ swiperData }
          navigation={ navigation }
        />
        <MainTitle
          title={'推荐课程'}
        />
        <RecomCourseList
          recomCourseData={ recomCourseData }
          navigation={ navigation }
        />
        <MainTitle
          title={ fieldData[0] && fieldData[0].field_name }
        />
        { this.renderMainTitle(null, '推荐课程') }
        { this.renderMainTitle(fieldData[1]) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});


export default HomePage;