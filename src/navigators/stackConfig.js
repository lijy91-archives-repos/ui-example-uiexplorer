import React from 'react';
import { Platform } from 'react-native';
import { AppBar } from '@blankapp/ui-pro';

const stackConfig = {
  initialRouteName: Platform.OS === 'web' ? undefined : 'Home',
  headerMode: 'screen',
  navigationOptions: {
    header: props => <AppBar {...props} />,
  },
};

export default stackConfig;
