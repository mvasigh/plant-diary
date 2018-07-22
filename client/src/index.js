import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import rootReducer from './reducers';
import firebase from 'firebase';
import 'firebase/firestore';

import { Provider } from 'react-redux';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyDnp8mX7tmPbnSAwkUfc7iLg0vJ85WcLLY',
  authDomain: 'plant-diary-1e535.firebaseapp.com',
  databaseURL: 'https://plant-diary-1e535.firebaseio.com',
  projectId: 'plant-diary-1e535',
  storageBucket: 'plant-diary-1e535.appspot.com',
  messagingSenderId: '512439992397'
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
