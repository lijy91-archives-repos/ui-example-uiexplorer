import React, { PureComponent } from 'react';
import { View } from '@blankapp/ui';

class SliceScreen extends PureComponent {
  render() {
    return (
      <View
        {...this.props}
        style={{
          backgroundColor: '#fafafa',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      />
    );
  }
}

export default SliceScreen;
