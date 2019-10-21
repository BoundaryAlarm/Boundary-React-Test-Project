import {combineReducers} from 'redux';
import {authReducer} from "../authentication/reducer";

export const rootReducer = combineReducers({
    auth: authReducer
});
