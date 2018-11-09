import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Theme, { ThemeProvider } from '@blankapp/ui';
import I18n from '@blankapp/plugin-i18n';
import defaultTheme from '@blankapp/ui/src/resources/themes/default';
import defaultThemePro from '@blankapp/ui-pro/src/resources/themes/default';
import AppNavigator from './navigators/AppNavigator';
import NavigationService from './navigators/NavigationService';
import languages from './resources/locales';

Theme.registerTheme('default', [
  defaultTheme,
  defaultThemePro,
]);

I18n.register(languages);
I18n.useDeviceLocale();

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <ThemeProvider>
        <AppNavigator
          ref={(navigatorRef) => {
            this.topLevelNavigator = navigatorRef;
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ThemeProvider>
    );
  }
}

export default App;
