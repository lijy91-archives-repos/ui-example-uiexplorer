import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { Screen, View } from '@blankapp/ui';
import PropTypes from 'prop-types';

const propTypes = {
  HeaderComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  ContentComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

class DemoScreen extends PureComponent {
  render() {
    const {
      HeaderComponent,
      ContentComponent,
      ...restProps
    } = this.props;

    const headerView = HeaderComponent && HeaderComponent();
    const contentView = ContentComponent && ContentComponent();

    const headerStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      height: 160,
      alignItems: 'center',
      justifyContent: 'center',
    };
    const contentStyle = {
      padding: 16,
    };
    return (
      <Screen
        {...restProps}
      >
        <ScrollView>
          <View style={headerStyle}>
            {headerView}
          </View>
          <View
            style={[
              contentStyle,
              restProps.contentStyle,
            ]}
          >
            {contentView}
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

DemoScreen.propTypes = propTypes;

export default DemoScreen;
