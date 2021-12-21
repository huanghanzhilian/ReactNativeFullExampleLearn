import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import IndexModel from './models/Index'
import ListModel from './models/List'

const indexModel = new IndexModel()
const listModel = new ListModel()

class Txclass extends Component {

  getCourseDatas () {
    indexModel.getCourseDatas().then(res => {
      console.log(res)
    })
  }

  getCourses (field) {
    listModel.getCourses(field).then(res => {
      console.log(res)
    })
  }

  getCourseFields () {
    listModel.getCourseFields().then(res => {
      console.log(res)
    })
  }

  componentDidMount () {
    this.getCourseDatas()
    this.getCourses('all')
    this.getCourseFields()
  }

  render () {

    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default Txclass
