import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCjXG0n-p4k7PU4SjO0TZjb1V-RGxAf16M",
      authDomain: "manager-2ad8c.firebaseapp.com",
      databaseURL: "https://manager-2ad8c.firebaseio.com",
      projectId: "manager-2ad8c",
      storageBucket: "",
      messagingSenderId: "550472468622"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!!!
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;