import { all } from 'redux-saga/effects';
import Section from './Section/saga';
export default function* rootSaga(getState) {
    yield all([
        Section()
    ]);
}