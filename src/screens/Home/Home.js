import React, { Component } from 'react';
import { SectionList, TouchableOpacity } from 'react-native';
import {
  Divider,
  Screen,
  Subtitle,
  Text,
  Title,
  View,
} from '@blankapp/ui';
import { t } from '@blankapp/plugin-i18n';

class Home extends Component {
  static navigationOptions = {
    title: 'UIExplorer',
    headerLeft: null,
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
            title: 'HyperlinkButton',
            description: t('screens.home.listItemDescriptionHyperlinkButton'),
            routeName: 'DemoHyperlinkButton',
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
            description: 'Coming soon',
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
            title: 'ListItem',
            description: 'Coming soon',
            routeName: 'DemoListItem',
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

  pressItem(item) {
    this.navigation.navigate(item.routeName);
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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => this.pressItem(item)}
      >
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
            minHeight: 64,
          }}
        >
          <Title>{item.title}</Title>
          <Subtitle>{item.description}</Subtitle>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Screen>
        <SectionList
          renderItem={this.renderItem}
          sections={this.state.sectionsSource}
          ItemSeparatorComponent={() => <Divider />}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={item => `${item.routeName}`}
        />
      </Screen>
    );
  }
}

export default Home;
