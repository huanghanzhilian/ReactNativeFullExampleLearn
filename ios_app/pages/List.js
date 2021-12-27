'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import ListModel from '../models/List'

const listModel = new ListModel()

class ListPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      fieldData: []
    }
  }

  getCourseFields () {
    listModel.getCourseFields().then(res => {
      const data = res.result

      this.setState({
        fieldData: [{ field: 'all', field_name: '全部课程' }].concat(data)
      })
      console.log(this.state.fieldData)
    })
  }

  getCourses (field) {
    listModel.getCourses(field).then(res => {
      const data = res.result

      console.log(data)
    })
  }

  componentDidMount () {
    this.getCourseFields()
    this.getCourses('1')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ListPage Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default ListPage;