import React, { Component } from 'react';
import { SectionList } from 'react-native';
import {
  ListItem,
  Screen,
  Text,
  View,
} from '@blankapp/ui';
import { t } from '@blankapp/plugin-i18n';
import NavigationService from '../../navigators/NavigationService';

class Home extends Component {
  static navigationOptions = {
    title: 'UIExplorer',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);

    const sectionsSource = [
      {
        title: t('screens.home.sectionItemBasicComponents'),
        data: [
          {
            title: 'ActivityIndicator',
            description: t('screens.home.listItemDescriptionActivityIndicator'),
            routeName: 'DemoActivityIndicator',
          },
          {
            title: 'Avatar',
            description: t('screens.home.listItemDescriptionAvatar'),
            routeName: 'DemoAvatar',
          },
          {
            title: 'Badge',
            description: t('screens.home.listItemDescriptionBadge'),
            routeName: 'DemoBadge',
          },
          {
            title: 'Button',
            description: t('screens.home.listItemDescriptionButton'),
            routeName: 'DemoButton',
          },
          {
            title: 'Card',
            description: t('screens.home.listItemDescriptionCard'),
            routeName: 'DemoCard',
          },
          {
            title: 'CheckBox',
            description: t('screens.home.listItemDescriptionCheckBox'),
            routeName: 'DemoCheckBox',
          },
          {
            title: 'Divider',
            description: t('screens.home.listItemDescriptionDivider'),
            routeName: 'DemoDivider',
          },
          {
            title: 'Form',
            description: t('screens.home.listItemDescriptionForm'),
            routeName: 'DemoForm',
          },
          {
            title: 'Grid',
            description: t('screens.home.listItemDescriptionGrid'),
            routeName: 'DemoGrid',
          },
          {
            title: 'HyperlinkButton',
            description: t('screens.home.listItemDescriptionHyperlinkButton'),
            routeName: 'DemoHyperlinkButton',
          },
          {
            title: 'ListItem',
            description: t('screens.home.listItemDescriptionListItem'),
            routeName: 'DemoListItem',
          },
          {
            title: 'Modal',
            description: t('screens.home.listItemDescriptionModal'),
            routeName: 'DemoModal',
          },
          {
            title: 'RadioButton',
            description: t('screens.home.listItemDescriptionRadioButton'),
            routeName: 'DemoRadioButton',
          },
          {
            title: 'Subtitle',
            description: t('screens.home.listItemDescriptionSubtitle'),
            routeName: 'DemoSubtitle',
          },
          {
            title: 'Switch',
            description: t('screens.home.listItemDescriptionSwitch'),
            routeName: 'DemoSwitch',
          },
          {
            title: 'Text',
            description: t('screens.home.listItemDescriptionText'),
            routeName: 'DemoText',
          },
          {
            title: 'TextInput',
            description: t('screens.home.listItemDescriptionTextInput'),
            routeName: 'DemoTextInput',
          },
          {
            title: 'Title',
            description: t('screens.home.listItemDescriptionTitle'),
            routeName: 'DemoTitle',
          },
          {
            title: 'View',
            description: t('screens.home.listItemDescriptionView'),
            routeName: 'DemoView',
          },
        ],
      },
      {
        title: t('screens.home.sectionItemAdvancedComponents'),
        data: [
          {
            title: 'AppBar',
            description: t('screens.home.listItemDescriptionAppBar'),
            routeName: 'DemoAppBar',
          },
          {
            title: 'Icon',
            description: t('screens.home.listItemDescriptionIcon'),
            routeName: 'DemoIcon',
          },
          {
            title: 'IconButton',
            description: t('screens.home.listItemDescriptionIconButton'),
            routeName: 'DemoIconButton',
          },
          {
            title: 'TabBar',
            description: 'Coming soon',
            routeName: 'DemoTabBar',
          },
          {
            title: 'ViewPager',
            description: 'Coming soon',
            routeName: 'DemoViewPager',
          },
        ],
      },
    ];

    this.state = {
      sectionsSource,
    };
  }

  handlePressItem(item) {
    NavigationService.navigate(item.routeName);
  }

  renderSectionHeader({ section }) {
    return (
      <View
        style={{
          paddingTop: 5,
          paddingRight: 15,
          paddingBottom: 0,
          paddingLeft: 15,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >{section.title}
        </Text>
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <ListItem
        activeOpacity={0.8}
        onPress={() => this.handlePressItem(item)}
        title={item.title}
        detailText={item.description}
      />
    );
  }

  render() {
    return (
      <Screen
        barStyle="light-content"
      >
        <SectionList
          renderItem={this.renderItem}
          sections={this.state.sectionsSource}
          ItemSeparatorComponent={() => <ListItem.Divider />}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={item => `${item.routeName}`}
        />
      </Screen>
    );
  }
}

export default Home;
