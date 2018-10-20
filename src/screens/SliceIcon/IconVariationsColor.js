import React, { Component } from 'react';
import { View } from '@blankapp/ui';
import { Icon } from '@blankapp/ui-pro';
import SliceScreen from '../../components/SliceScreen';

class ButtonVariationsSize extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    const panelStyle = {
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
    };
    return (
      <SliceScreen>
        <View style={panelStyle}>
          <Icon name="thumb-up" color="red" />
          <Icon name="thumb-up" color="green" />
          <Icon name="thumb-up" color="blue" />
          <Icon name="thumb-up" color="yellow" />
        </View>
      </SliceScreen>
    );
  }
}

export default ButtonVariationsSize;
