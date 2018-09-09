import React, { Component } from 'react';
import {
  Avatar,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

const demoSource = {
  uri: 'https://en.gravatar.com/userimage/56976660/32551293acba1f5cfb5ab736e18cf1f4.png',
};

class DemoAvatar extends Component {
  static navigationOptions = {
    title: 'Avatar',
  };

  renderHeader() {
    return (
      <View>
        <Avatar
          source={demoSource}
        />
      </View>
    );
  }

  renderContent() {
    const avatarPanelStyle = {
      flexWrap: 'wrap',
      flexDirection: 'row',
    };
    const avatarMarginStyle = {
      marginRight: 4,
      marginBottom: 4,
    };
    return (
      <View>
        <Title>Variations</Title>
        <View>
          <Subtitle>Size</Subtitle>
          <View
            style={avatarPanelStyle}
          >
            <Avatar source={demoSource} style={avatarMarginStyle} size="mini" />
            <Avatar source={demoSource} style={avatarMarginStyle} size="small" />
            <Avatar source={demoSource} style={avatarMarginStyle} size="medium" />
            <Avatar source={demoSource} style={avatarMarginStyle} size="large" />
            <Avatar source={demoSource} style={avatarMarginStyle} size="big" />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoAvatar;
