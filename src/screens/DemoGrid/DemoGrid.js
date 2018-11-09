import React, { Component } from 'react';
import {
  Grid,
  Image,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';
import imgParagraph from '../../resources/images/paragraph.png';
// import imgMediaParagraph from '../../resources/images/media-paragraph.png';

class DemoGrid extends Component {
  static navigationOptions = {
    title: 'Grid',
  };

  makeGridColumns(numColumns) {
    const columnViews = Array.from({ length: numColumns })
      .map((v, index) => {
        const key = `${v}${index}`;
        return (
          <Grid.Column
            key={key}
            style={{ padding: 6 }}
          >
            <Image
              style={{
                width: '100%',
                height: 60,
              }}
              resizeMode="contain"
              source={imgParagraph}
            />
          </Grid.Column>
        );
      });
    return columnViews;
  }

  renderHeader() {
    return (
      <View
        style={{
          width: '100%',
          minWidth: 300,
          height: 100,
          paddingLeft: 16,
          paddingRight: 16,
          justifyContent: 'center',
        }}
      >
        <Grid columns={3}>
          {this.makeGridColumns(3)}
        </Grid>
      </View>
    );
  }

  renderContent() {
    return (
      <View>
        <Title>Content</Title>
        <View>
          <Subtitle>Rows</Subtitle>
          <Grid columns={2}>
            <Grid.Row columns={3}>
              {this.makeGridColumns(2)}
            </Grid.Row>
            <Grid.Row columns={3}>
              {this.makeGridColumns(4)}
            </Grid.Row>
          </Grid>
          <Subtitle>Columns</Subtitle>
          <Grid columns={3}>
            {this.makeGridColumns(4)}
          </Grid>
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

export default DemoGrid;
