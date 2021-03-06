import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AllLayout from './containers/allLayout';

export default class Vinyl extends Component {
  render() {
    return (
      <Provider store={store}>
        <AllLayout/>
      </Provider>
    );
  }
}
