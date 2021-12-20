import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Content from './components/Content'

class Txclass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentText: 'Content component'
    }
  }

  onViewClick() {
    this.setState({
      contentText: 'hello'
    })
  }

  render() {

    const { contentText } = this.state

    return (
      <Content
        contentText={contentText}
        onViewClick={this.onViewClick.bind(this)}
      />
    );
  }
}

export default Txclass;