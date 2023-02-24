import * as constants from './constant'
const INIT_STATE = {
    loading: false,
};
const Reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case constants.ADD_NEW_TASK:
        case constants.UPDATE_STATE_TASK:
        case constants.GET_LIST_TASK:
            return { ...state, loading: true };

        case constants.ADD_NEW_TASK_FAILED:
        case constants.UPDATE_STATE_TASK_FAILED:
        case constants.GET_LIST_TASK_FAILED:
            return { ...state, error: action.payload, loading: false };


        case constants.ADD_NEW_TASK_SUCCESS:
            return { ...state, taskNew: action.payload, loading: false, error: null };
        case constants.UPDATE_STATE_TASK_SUCCESS:
            return { ...state, taskEdit: action.payload, loading: false, error: null };
        case constants.GET_LIST_TASK_SUCCESS:
            return { ...state, taskList: action.payload, loading: false, error: null };

        default:
            return { ...state };
    }
};

export default Reducer;