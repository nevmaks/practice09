import * as types from "../Constants";

let detailInitState = {
    records: [],
    loading: false
}

export function detailsReducer(state = detailInitState, action) {
    switch (action.type) {
        case types.DETAIL_ADD_DATA: {
            return {...state, records: [...action.value]};
        }
        case types.DETAIL_START_LOADING: {
            return {...state, loading: true};
        }
        case types.DETAIL_STOP_LOADING: {
            return {...state, loading: false};
        }
        default:
            return state;
    }
}
