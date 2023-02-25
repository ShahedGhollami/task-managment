import { all } from 'redux-saga/effects';
import Task from './Task/saga';
import Section from './Section/saga';
export default function* rootSaga(getState) {
    yield all([
        Section(),Task()
    ]);
}