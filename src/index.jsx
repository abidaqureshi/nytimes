import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import rootSaga from './sagas'
import { articleReducer } from './store/reducers'
import * as serviceWorker from './serviceWorker'
/*
    Make entry of new reducers here
*/
const rootReducers = combineReducers({
  article: articleReducer,
})

/*
  Making Saga objects
*/

const sagaMiddleWear = createSagaMiddleware()

/*
Applying middlware in order to use redux-saga because we want
to hold the update operation to the redux store until our
async response is arrived
*/

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(sagaMiddleWear)))
sagaMiddleWear.run(rootSaga)

const RenderAppComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<RenderAppComponent />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
