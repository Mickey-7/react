import {combineReducers} from 'redux';
import UserReducer from './reducer';

const rootReducer = combineReducers({
    userReducer : UserReducer
})

export default rootReducer;


