import React from 'react';
import {  RootStack } from './src/routes/Route';

import { Provider } from "mobx-react";
import stores from "./src/stores/";


export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
       <RootStack />
      </Provider>
    );
  }
}

