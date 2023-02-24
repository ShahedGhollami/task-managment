import { all } from 'redux-saga/effects';
import ConactForm from './Task/saga';
export default function* rootSaga(getState) {
    yield all([
        ConactForm()
    ]);
}