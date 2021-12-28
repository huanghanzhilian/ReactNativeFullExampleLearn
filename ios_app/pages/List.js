import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

import ListModel from '../models/List'

import ListTab from '../components/ListTab'
import CourseList from '../components/CourseList'
import MyRefreshControl from '../components/MyRefreshControl'

import commonStyles from '../styles/commonStyles'

const listModel = new ListModel()

class ListPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      fieldData: [],
      courseData: {},
      curIdx: 0,
      curField: 'all',
      isRefreshing: false
    }
  }

  getCourseFields () {
    listModel.getCourseFields().then(res => {
      const data = res.result

      this.setState({
        fieldData: [{ field: 'all', field_name: '全部课程' }].concat(data)
      })
    })
  }

  getCourses (field) {
    listModel.getCourses(field).then(res => {
      this.state.courseData[field] = res.result
      this.setState({
        courseData: this.state.courseData
      })
      console.log(this.state.courseData)
    })
  }

  onTabClick (field, index) {
    this.setState({
      curField: field,
      curIdx: index
    }, () => {
      const { courseData, curField } = this.state
      !courseData[curField] && this.getCourses(curField)
    })
  }

  onPageRefresh () {
    const { isRefreshing, curField } = this.state

    if (isRefreshing) return

    this.setState({
      isRefreshing: true
    }, () => {
      this.getCourses(curField)
    })

    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 2000)
  }

  componentDidMount () {
    this.getCourseFields()
    this.getCourses(this.state.curField)
  }

  render() {

    const { fieldData,
            courseData,
            curField,
            curIdx,
            isRefreshing } = this.state
    const { navigation } = this.props

    return (
      <View style={ commonStyles.container }>
        <ListTab
          fieldData={ fieldData }
          onTabClick={ this.onTabClick.bind(this) }
          curIdx={ curIdx }
        />

        <ScrollView
          showsVerticalScrollIndicator={ false }
          refreshControl={
            <MyRefreshControl
              isRefreshing={ isRefreshing }
              onPageRefresh={ this.onPageRefresh.bind(this) }
            />
          }
        >
          {
            courseData[curField]
            &&
            <CourseList
              courseData={ courseData[curField] }
              navigation= { navigation }
            />
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default ListPage;
