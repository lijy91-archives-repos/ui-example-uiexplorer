import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BrowserAppContainer from './BrowserAppContainer';

import routeConfigMap from './routeConfigMap';
import stackConfig from './stackConfig';

const AppNavigator = createStackNavigator(routeConfigMap, stackConfig);

export default Platform.OS === 'web' ? BrowserAppContainer(AppNavigator) : AppNavigator;
