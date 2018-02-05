import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk ));

    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App;