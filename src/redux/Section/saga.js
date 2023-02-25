import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { handleError, fetchJSON, optionPost, optionGet } from '../../helper/apiUtils';
import * as constants from './constant';
import * as action from './action';
function* GetListSection({ payload: { body } }) {
    try {
        // Get Data From Database
        const res = localStorage.getItem('Tasklist')
        if (res !== null)
            yield put(action.GetListSectionSuccess(JSON.parse(res)));
            else{
                yield  put(action.GetListSectionSuccess([]));
            }
    } catch (error) {
        let message = handleError(error);
        yield put(action.GetListSectionFailed(message));
    }
}
function* AddNewSection({ payload: { body } }) {
    try {
        let res = [];
        const list = localStorage.getItem('Tasklist');
        if (list !== null) {
            res = JSON.parse(list)
        }
        const newList=[...res,{ name: body.SectionName, task: []}]      
        localStorage.setItem('Tasklist', JSON.stringify(newList))
        yield put(action.AddNewSectionSuccess(newList));
    } catch (error) {
        let message = handleError(error);
        yield put(action.AddNewSectionFailed(message));
    }
}
export function* watchGetListSection() {
    yield takeEvery(constants.GET_LIST_SECTION, GetListSection)
}
export function* watchAddNewSection() {
    yield takeEvery(constants.ADD_NEW_SECTION, AddNewSection)
}
function* Saga() {
    yield all([
        fork(watchGetListSection),
        fork(watchAddNewSection),
    ]);
}

export default Saga;