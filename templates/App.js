/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import Router from './src/navigation/Router';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './src/reducers';
import reduxThunk from 'redux-thunk';
import DropdownAlert from 'react-native-dropdownalert';
import {DropDownHolder} from './src/util/DropDownHolder';

// applyMiddleware : usado para combinar varios middlewares
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const App = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Provider store={store}>
        <Router />
      </Provider>
      <DropdownAlert
        defaultContainer={{flexDirection: 'row'}}
        ref={(ref) => DropDownHolder.setDropDown(ref)}
        titleTextProps={{fontSize: 12}}
        messageNumOfLines={4}
        titleNumOfLines={2}
      />
    </View>
  );
};

export default App;
