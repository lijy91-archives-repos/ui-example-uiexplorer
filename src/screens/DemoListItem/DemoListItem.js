import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Text, View } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';
import img1 from '../../resources/images/img1.png';

class DemoListItem extends Component {
  static navigationOptions = {
    title: 'ListItem',
  };

  renderHeader() {
    return (
      <Text>Coming soon</Text>
    );
  }

  renderItem({ item }) {
    return (
      <ListItem
        {...item}
      />
    );
  }

  renderContent() {
    const itemsSource = [
      {
        title: 'TITLE',
      },
      {
        title: 'TITLE',
        accessoryType: ListItem.accessoryTypes.DisclosureIndicator,
      },
      {
        title: 'TITLE',
        detailText: 'DETAIL TEXT',
      },
      {
        title: 'TITLE',
        detailText: 'DETAIL TEXT',
        accessoryType: ListItem.accessoryTypes.DisclosureIndicator,
      },
      { imageSource: img1, title: 'TITLE', detailText: 'DETAIL TEXT' },
    ].map((v, index) => Object.assign(v, { title: `${index}. ${v.title}`, onPress: () => {} }));
    return (
      <View>
        <FlatList
          data={itemsSource}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <ListItem.Divider />}
        />
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
        contentStyle={{
          padding: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      />
    );
  }
}

export default DemoListItem;
