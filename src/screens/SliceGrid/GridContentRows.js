import React, { Component } from 'react';
import { Grid, View } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';
import makeGridColumns from './makeGridColumns';

class GridContentRows extends Component {
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
          <Grid columns={2} style={{ flex: 1 }}>
            <Grid.Row columns={3}>
              {makeGridColumns(2)}
            </Grid.Row>
            <Grid.Row columns={3}>
              {makeGridColumns(4)}
            </Grid.Row>
          </Grid>
        </View>
      </SliceScreen>
    );
  }
}

export default GridContentRows;
