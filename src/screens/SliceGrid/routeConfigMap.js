import GridExample from './GridExample';
import GridContentRows from './GridContentRows';
import GridContentColumns from './GridContentColumns';

const routeConfigMap = {
  GridExample: {
    screen: GridExample,
    path: 'slices/grid-example',
  },
  GridContentRows: {
    screen: GridContentRows,
    path: 'slices/grid-content-rows',
  },
  GridContentColumns: {
    screen: GridContentColumns,
    path: 'slices/grid-content-columns',
  },
};

export default routeConfigMap;
