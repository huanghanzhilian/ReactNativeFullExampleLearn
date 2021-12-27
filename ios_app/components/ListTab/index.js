import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView
} from 'react-native';

import styles from './styles'

import TabItem from './TabItem'

class index extends Component {
  render() {

    const { fieldData, onTabClick, curIdx } = this.props

    return (
      <View style={ styles.tabContainer }>
        <ScrollView
          showsHorizontalScrollIndicator={ false }
          horizontal={ true }
        >
          {
            fieldData.map((item, index) => {
              return (
                <TabItem
                  data={ item }
                  index={ index }
                  key={ index }
                  styles={ styles }
                  curIdx={ curIdx }
                  onTabClick={ onTabClick }
                />
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}


export default index;
