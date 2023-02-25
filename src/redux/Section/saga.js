import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { handleError, fetchJSON, optionPost, optionGet } from '../../helper/apiUtils';
import * as constants from './constant';
import * as action from './action';
import { v4 as uuid } from 'uuid';
import _ from 'lodash'
function* GetListSection({ payload: { body } }) {
    try {
        // Get Data From Database
        const res = localStorage.getItem('Tasklist')
        if (res !== null)
            yield put(action.GetListSectionSuccess(JSON.parse(res)));
        else {
            yield put(action.GetListSectionSuccess([]));
        }
    } catch (error) {
        let message = handleError(error);
        yield put(action.GetListSectionFailed(message));
    }
}
function* AddNewSection({ payload: { body } }) {
    try {
        let res = [];
        let priority=1;
        const list = localStorage.getItem('Tasklist');
        if (list !== null) {
            res = JSON.parse(list)            
            priority=_.maxBy(res, function(o) { return o.priority; }).priority+1;
        }
        const newList = [...res, { id: uuid(),priority:priority, name: body.SectionName, task: [] }]
        localStorage.setItem('Tasklist', JSON.stringify(newList))
        yield put(action.AddNewSectionSuccess(newList));
    } catch (error) {
        let message = handleError(error);
        yield put(action.AddNewSectionFailed(message));
    }
}
function* AddNewTask({ payload: { body } }) {
    try {        
        let priority = 1;
        const list = JSON.parse(localStorage.getItem('Tasklist'));
        const task = list.find(x => x.id = body.ParentId).task
        const Index = list.findIndex(x => x.id = body.ParentId)
        if(task.length>0){
            priority = _.maxBy(task, function (o) { return o.priority; }).priority + 1;
        }        
        const newListTask = [...task, { id: uuid(), priority: priority, Title: body.Title, Description:body.Description,Status:body.Status }]
        console.log(newListTask)
        list[Index].task=newListTask
        localStorage.setItem('Tasklist', JSON.stringify(list))
        yield put(action.AddNewTaskSuccess(newList));
    } catch (error) {
        let message = handleError(error);
        yield put(action.AddNewTaskFailed(message));
    }
}
export function* watchAddNewTask() {
    yield takeEvery(constants.ADD_NEW_TASK, AddNewTask)
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
        fork(watchAddNewTask),
    ]);
}

export default Saga;