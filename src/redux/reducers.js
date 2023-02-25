import { combineReducers } from 'redux';
import Task from './Task/reducer';
import Section from './Section/reducer';
export default combineReducers({
    Task,Section
});