import React, { Component } from 'react';
import { Button, Form, TextInput, View } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class DividerExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <SliceScreen>
        <View
          style={{
            width: 375,
          }}
        >
          <Form>
            <Form.Field>
              <TextInput
                placeholder="Email"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                keyboardType="email-address"
              />
            </Form.Field>
            <Form.Field>
              <TextInput
                placeholder="Password"
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                maxLength={32}
                secureTextEntry
              />
            </Form.Field>
            <Form.Field>
              <Button
                text="Submit"
              />
            </Form.Field>
          </Form>
        </View>
      </SliceScreen>
    );
  }
}

export default DividerExample;
