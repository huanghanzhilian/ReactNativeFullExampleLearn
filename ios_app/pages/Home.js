'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  ScrollView
} from 'react-native';

import { filterFieldData } from '../utils/extension'

import IndexModel from '../models/Index'
import IndexSwiper from '../components/IndexSwiper'
import MainTitle from '../components/MainTitle'
import RecomCourseList from '../components/RecomCourseList'
import CourseList from '../components/CourseList'
import MyRefreshControl from '../components/MyRefreshControl'

const indexModel = new IndexModel()

class HomePage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: [],

      isRefreshing: true
    }
  }

  getCourseDatas () {
    indexModel.getCourseDatas().then(res => {
      const data = res.result

      this.setState({
        swiperData: data.swipers,
        fieldData: [{ 'field_name': '热门推荐', 'field': '' }].concat(data.fields),
        courseData: data.courses,
        recomCourseData: data.recomCourses
      }, () => {
        console.log(this.state)
        if (this.state.isRefreshing) {
          this.setState({
            isRefreshing: false
          })
        }
      })
    })
  }

  renderMainTitle (data, title) {
    if (data) {
      return <MainTitle title={ data.field_name } />
    }

    return <MainTitle title={ title } />
  }

  onPageRefresh () {
    if (this.state.isFreshing) return

    this.setState({
      isRefreshing: true
    })

    this.getCourseDatas()
  }

  componentDidMount () {
    this.getCourseDatas()
  }

  render() {

    const { navigation } = this.props
    const { swiperData, fieldData, recomCourseData, courseData, isRefreshing } = this.state

    return (
      <ScrollView
        automaticallyAdjustContentInsets={ false }
        showsVerticalScrollIndicator={ false }
        refreshControl={
          <MyRefreshControl
            isRefreshing={ isRefreshing }
            onPageRefresh={ this.onPageRefresh.bind(this) }
          />
        }
      >
        <IndexSwiper
          swiperData={ swiperData }
          navigation={ navigation }
        />

        { this.renderMainTitle(fieldData[0]) }
        <RecomCourseList
          recomCourseData={ recomCourseData }
          navigation={ navigation }
        />

        { this.renderMainTitle(fieldData[1]) }
        <CourseList
          courseData={ filterFieldData(courseData, '0', true) }
          navigation={ navigation }
        />

        { this.renderMainTitle(fieldData[2]) }
        <CourseList
          courseData={ filterFieldData(courseData, '1', true) }
          navigation={ navigation }
        />

        { this.renderMainTitle(fieldData[3]) }
        <CourseList
          courseData={ filterFieldData(courseData, '2', true) }
          navigation={ navigation }
        />

        { this.renderMainTitle(fieldData[4]) }
        <CourseList
          courseData={ filterFieldData(courseData, '3', true) }
          navigation={ navigation }
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});


export default HomePage;