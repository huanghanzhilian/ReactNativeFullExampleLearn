import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import AniImage from '../AniImage'
import { directToPage } from '../../utils/extension'

class CourseItem extends Component {
  render() {

    const { data, styles, navigation, index } = this.props

    return (
      <TouchableWithoutFeedback
        onPress={() => directToPage(navigation, 'DetailPage', { courseId: data.course_id }) }
      >
        <View style={ [styles.courseItem, !index && styles.courseItemFirst] }>
          <View style={ styles.imgView }>
            <AniImage
              styles={ styles.imgView }
              url={ data.course_img }
            />
          </View>
          <View style={ styles.courseName }>
            <Text style={ styles.courseNameText }>
              { data.course_name }
            </Text>
          </View>
          <View style={ styles.teacherIfon }>
            <AniImage
              styles={ styles.teacherImg }
              url={ data.teacher_img }
            />
            <Text style={styles.teacherName}>
              { data.teacher_name }
            </Text>
          </View>
          <View style={ styles.price }>
            <Text style={styles.priceNum}>
              ¥{ data.price }
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


export default CourseItem

