import React, { Component } from 'react';
import { Text } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ErrorNotFound extends Component {
  static navigationOptions = {
    title: 'Not found',
    header: null,
  };


  render() {
    return (
      <SliceScreen>
        <Text>Page not found.</Text>
      </SliceScreen>
    );
  }
}

export default ErrorNotFound;
