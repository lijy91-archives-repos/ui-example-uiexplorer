import React, { Component } from 'react';
import { Grid, View } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';
import makeGridColumns from './makeGridColumns';

class GridContentColumns extends Component {
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
          }}
        >
          <Grid columns={3} style={{ flex: 1 }}>
            {makeGridColumns(4)}
          </Grid>
        </View>
      </SliceScreen>
    );
  }
}

export default GridContentColumns;
