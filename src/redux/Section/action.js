import * as constants from './constant'
export const GetListSection = (body) => ({
    type: constants.GET_LIST_SECTION,
    payload: {body}
});
export const GetListSectionSuccess = (res) => ({
    type: constants.GET_LIST_SECTION_SUCCESS,
    payload: res
});
export const GetListSectionFailed = (error) => ({
    type: constants.GET_LIST_SECTION_FAILED,
    payload: error
});

export const AddNewSection = (body) => ({
    type: constants.ADD_NEW_SECTION,
    payload: {body}
});
export const AddNewSectionSuccess = (res) => ({
    type: constants.ADD_NEW_SECTION_SUCCESS,
    payload: res
});
export const AddNewSectionFailed = (error) => ({
    type: constants.ADD_NEW_SECTION_FAILED,
    payload: error
});

export const NewTask = (body) => ({
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