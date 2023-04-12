import * as types from "../Constants";

let gridInitState = {
    records: [],
    filter: '',
    loading: false
}

export function gridReducer(state = gridInitState, action) {
    switch (action.type) {
        case types.ADD_DATA: {
            return {...state, records: [...action.value]};
        }
        case types.FILTER: {
            let newState = {...state};
            newState.filter = action.value;
            return newState;
        }
        case types.START_LOADING: {
            return {...state, loading: true};
        }
        case types.STOP_LOADING: {
            return {...state, loading: false};
        }
        case types.TOGGLE_ACTIVE: {
            let newState = {...state};
            newState.records = [...newState.records];
            newState.records[action.value] = {
                ...newState.records[action.value],
                active: !newState.records[action.value].active
            };
            return newState;
        }
        default:
            return state;
    }
}