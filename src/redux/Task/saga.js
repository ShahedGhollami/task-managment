import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { listUrl, handleError, fetchJSON, optionPost, optionGet } from '../../helper/apiUtils';
import * as constants from './constant';
import * as action from './action';
function* GetListTask({ payload: { body } }) {
    try {
        // Get Data From Database
        // const res = yield call(fetchJSON, Url, optionPost(body));
        yield put(action.GetListTaskSuccess(res));
    } catch (error) {
        let message = handleError(error);
        yield put(action.GetListTaskFailed(message));
    }
}

export function* watchGetListTask() {
    yield takeEvery(constants.GET_LIST_TASK, GetListTask)
}
function* Saga() {
    yield all([
        fork(watchGetListTask)
    ]);
}

export default Saga;