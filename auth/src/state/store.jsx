
import { createStore, applyMiddleware } from "redux";
import authReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const store = createStore( authReducer, composeWithDevTools( applyMiddleware( sagaMiddleware ) ) )

sagaMiddleware.run( rootSaga )

export default store