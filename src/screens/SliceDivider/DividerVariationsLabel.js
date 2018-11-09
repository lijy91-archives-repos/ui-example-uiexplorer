import React, { Component } from 'react';
import { View, Divider } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class DividerVariationsOrientation extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    return (
      <SliceScreen>
        <View
          style={{
            width: 375,
            height: 200,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Divider orientation="horizontal" label="OR" />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Divider orientation="vertical" label="OR" />
          </View>
        </View>
      </SliceScreen>
    );
  }
}

export default DividerVariationsOrientation;
