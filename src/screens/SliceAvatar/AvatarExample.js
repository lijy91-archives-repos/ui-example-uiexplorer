import React, { Component } from 'react';
import { Avatar } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

const demoSource = {
  uri: 'https://en.gravatar.com/userimage/56976660/32551293acba1f5cfb5ab736e18cf1f4.png',
};

class AvatarExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <Avatar source={demoSource} />
      </SliceScreen>
    );
  }
}

export default AvatarExample;
