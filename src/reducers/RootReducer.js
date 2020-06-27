import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import stepsReducer from './stepsReducer'

const reducers = {
    steps: stepsReducer,
    form: formReducer
}

export default combineReducers(reducers)