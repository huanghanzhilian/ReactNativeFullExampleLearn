import React, { Component } from 'react';
import { WebView } from 'react-native-webview'

class DetailPage extends Component {
  render() {

    const { route } = this.props,
          { courseId } = route.params

    return (
      <WebView
        source={{ uri: 'https://ke.qq.com/course/' + courseId }}
        startInLoadingState={ true }
      />
    );
  }
}


export default DetailPage
