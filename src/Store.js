import {createStore, compose} from 'redux'
import rootReducer from './reducers/RootReducer'

export default  createStore(rootReducer, {},
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))