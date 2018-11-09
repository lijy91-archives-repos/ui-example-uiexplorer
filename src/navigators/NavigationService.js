import { NavigationActions, StackActions } from 'react-navigation';

let topLevelNavigator;

const setTopLevelNavigator = (navigatorRef) => {
  topLevelNavigator = navigatorRef;
};


/**
 * goBack
 *
 * @example
 * NavigationService.goBack();
 *
 */
const goBack = () => {
  const action = NavigationActions.back({
    type: NavigationActions.BACK,
  });
  topLevelNavigator.dispatch(action);
};

/**
 * navigate
 *
 * @example
 * NavigationService.navigate('Login');
 *
 * @param {*} routeName
 * @param {*} params
 */
const navigate = (routeName, params) => {
  const action = NavigationActions.navigate({
    type: NavigationActions.NAVIGATE,
    routeName,
    params,
  });
  topLevelNavigator.dispatch(action);
};

/**
 * push
 *
 * @example
 * NavigationService.push('CourseDetail');
 *
 * @param {*} routeName
 * @param {*} params
 */
const push = (routeName, params) => {
  const action = StackActions.push({
    routeName,
    params,
  });
  topLevelNavigator.dispatch(action);
};

/**
 * reset
 *
 * @example
 * NavigationService.reset('Home');
 *
 * @param {*} routeName
 * @param {*} params
 */
const reset = (routeName, params) => {
  const action = StackActions.reset({
    index: 0,
    key: 'StackRouterRoot',
    actions: [NavigationActions.navigate({ routeName, params })],
  });
  topLevelNavigator.dispatch(action);
};

export default {
  setTopLevelNavigator,
  goBack,
  navigate,
  push,
  reset,
};
