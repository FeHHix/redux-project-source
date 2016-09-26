import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

export default function configureStore(initiialState) {
  const logger = createLogger()
  const store = createStore(
    rootReducer,
    initiialState,
    applyMiddleware(logger))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
