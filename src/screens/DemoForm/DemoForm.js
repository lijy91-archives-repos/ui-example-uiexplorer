import React, { Component } from 'react';
import {
  Button,
  Form,
  Text,
  TextInput,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoForm extends Component {
  static navigationOptions = {
    title: 'Form',
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'red',
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
              style={{ flex: 1 }}
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
    );
  }

  renderContent() {
    return (
      <View>
        <Text>No demos</Text>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoForm;
