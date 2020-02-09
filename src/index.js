import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady:true}) // enhancer booooi 'users' is the user collection on firebase so state.firebase.profile will access signed in users stuff 
    )
);

store.firebaseAuthIsReady.then(()=> { // dont render anything to DOM until auth is figured out 
    ReactDOM.render(<Provider store = {store} >
        <BrowserRouter >
            <App/>
        </BrowserRouter>
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
})