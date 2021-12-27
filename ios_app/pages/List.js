'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import ListModel from '../models/List'

import ListTab from '../components/ListTab'

import commonStyles from '../styles/commonStyles'

const listModel = new ListModel()

class ListPage extends Component {

  constructor (props) {
    super(props)

    this.state = {
      fieldData: [],
      curIdx: 0,
      curField: 'all'
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

  onTabClick (field, index) {
    this.setState({
      curField: field,
      curIdx: index
    })
  }

  componentDidMount () {
    this.getCourseFields()
    this.getCourses('1')
  }

  render() {

    const { fieldData, curIdx } = this.state

    return (
      <View style={ commonStyles.container }>
        <ListTab
          fieldData={ fieldData }
          onTabClick={ this.onTabClick.bind(this) }
          curIdx={ curIdx }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default ListPage;
