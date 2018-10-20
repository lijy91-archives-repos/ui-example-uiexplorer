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
          <Icon name="thumb-up" size={24} />
          <Icon name="thumb-up" size={44} />
          <Icon name="thumb-up" size={64} />
          <Icon name="thumb-up" size={84} />
        </View>
      </SliceScreen>
    );
  }
}

export default ButtonVariationsSize;
