import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import 'tachyons'; 
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		{/*{console.log('index.js', 'store:', store)}*/}
		<App />
		}
	</Provider>, document.getElementById('root'));
registerServiceWorker();
