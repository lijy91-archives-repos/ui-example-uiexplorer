import React, { Component } from 'react';
import { Icon } from '@blankapp/ui-pro';
import SliceScreen from '../../components/SliceScreen';

class ButtonExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Icon name="thumb-up" />
      </SliceScreen>
    );
  }
}

export default ButtonExample;
