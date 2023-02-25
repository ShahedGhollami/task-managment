import * as constants from './constant'
const INIT_STATE = {
    loading: false,
};
const Reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case constants.ADD_NEW_SECTION:
        case constants.GET_LIST_SECTION:
        case constants.ADD_NEW_TASK:
            return { ...state, loading: true };
        case constants.ADD_NEW_SECTION_FAILED:
        case constants.GET_LIST_SECTION_FAILED:
        case constants.ADD_NEW_TASK_FAILED:
            return { ...state, error: action.payload, loading: false };
        case constants.ADD_NEW_SECTION_SUCCESS:
        case constants.ADD_NEW_TASK_SUCCESS:
        case constants.GET_LIST_SECTION_SUCCESS:
            return { ...state, SectionList: action.payload, loading: false, error: null };

        default:
            return { ...state };
    }
};

export default Reducer;