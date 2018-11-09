import React, { Component } from 'react';
import { FlatList } from 'react-native';
import {
  ListItem,
  Screen,
} from '@blankapp/ui';
import NavigationService from '../../navigators/NavigationService';
import { sliceRouteConfigMap } from '../../navigators/routeConfigMap';

class ListOfSlices extends Component {
  static navigationOptions = {
    title: 'List Of Slices',
  };

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);

    const itemsSource = Object.keys(sliceRouteConfigMap)
      .map((key) => {
        const route = sliceRouteConfigMap[key];
        return {
          routeName: key,
          ...route,
        };
      });

    this.state = {
      itemsSource,
    };
  }

  renderItem({ item }) {
    const { routeName, path: routePath } = item;
    return (
      <ListItem
        title={routeName}
        detailText={routePath}
        onPress={() => {
          NavigationService.navigate(routeName);
        }}
      />
    );
  }

  render() {
    return (
      <Screen>
        <FlatList
          renderItem={this.renderItem}
          data={this.state.itemsSource}
          ItemSeparatorComponent={() => <ListItem.Divider />}
        />
      </Screen>
    );
  }
}

export default ListOfSlices;
