// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from './store/reducers/rootReducer';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import {reduxFirestore, getFirestore} from 'redux-firestore';
// import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';

// const store = createStore(rootReducer,
//     compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig, {useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady:true}) // enhancer booooi 'users' is the user collection on firebase so state.firebase.profile will access signed in users stuff 
//     )
// );

// store.firebaseAuthIsReady.then(()=> { // dont render anything to DOM until auth is figured out 
//     ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// })




// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
