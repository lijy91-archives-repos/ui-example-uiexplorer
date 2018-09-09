import React, { Component } from 'react';
import { Avatar, View } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

const demoSource = {
  uri: 'https://en.gravatar.com/userimage/56976660/32551293acba1f5cfb5ab736e18cf1f4.png',
};

class ButtonVariationsSize extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    const avatarPanelStyle = {
      flexWrap: 'wrap',
      flexDirection: 'row',
    };
    const avatarMarginStyle = {
      marginRight: 4,
    };
    return (
      <SliceScreen>
        <View style={avatarPanelStyle}>
          <Avatar source={demoSource} style={avatarMarginStyle} size="mini" />
          <Avatar source={demoSource} style={avatarMarginStyle} size="small" />
          <Avatar source={demoSource} style={avatarMarginStyle} size="medium" />
          <Avatar source={demoSource} style={avatarMarginStyle} size="large" />
          <Avatar source={demoSource} style={avatarMarginStyle} size="big" />
        </View>
      </SliceScreen>
    );
  }
}

export default ButtonVariationsSize;
