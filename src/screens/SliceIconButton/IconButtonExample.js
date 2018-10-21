import React, { Component } from 'react';
import { IconButton } from '@blankapp/ui-pro';
import SliceScreen from '../../components/SliceScreen';

class ButtonExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <IconButton iconName="thumb-up" />
      </SliceScreen>
    );
  }
}

export default ButtonExample;
