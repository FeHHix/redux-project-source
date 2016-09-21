import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initiialState) {
  const store = createStore(rootReducer, initiialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
