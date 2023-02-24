import * as constants from './constant'
export const GetListTask = (body) => ({
    type: constants.GET_LIST_TASK,
    payload: {body}
});
export const GetListTaskSuccess = (res) => ({
    type: constants.GET_LIST_TASK_SUCCESS,
    payload: res
});
export const GetListTaskFailed = (error) => ({
    type: constants.GET_LIST_TASK_FAILED,
    payload: error
});



export const AddNewTask = (body) => ({
    type: constants.ADD_NEW_TASK,
    payload: {body}
});
export const AddNewTaskSuccess = (res) => ({
    type: constants.ADD_NEW_TASK_SUCCESS,
    payload: res
});
export const AddNewTaskFailed = (error) => ({
    type: constants.ADD_NEW_TASK_FAILED,
    payload: error
});


export const UpdateStateTask = (body) => ({
    type: constants.UPDATE_STATE_TASK,
    payload: {body}
});
export const UpdateStateTaskSuccess = (res) => ({
    type: constants.UPDATE_STATE_TASK_SUCCESS,
    payload: res
});
export const UpdateStateTaskFailed = (error) => ({
    type: constants.UPDATE_STATE_TASK_FAILED,
    payload: error
});