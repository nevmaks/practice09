import * as types from "../Constants";

let gridInitState = {
    records: [],
    filter: '',
    loading: false
}

export function gridReducer(state = gridInitState, action) {
    switch (action.type) {
        case types.GRID_ADD_DATA: {
            return {...state, records: [...action.value]};
        }
        case types.GRID_FILTER: {
            let newState = {...state};
            newState.filter = action.value;
            return newState;
        }
        case types.GRID_START_LOADING: {
            return {...state, loading: true};
        }
        case types.GRID_STOP_LOADING: {
            return {...state, loading: false};
        }
        case types.GRID_TOGGLE_ACTIVE: {
            let newState = {...state};
            let index = newState.records.findIndex(record => record.id === action.value);
            newState.records = [...newState.records];
            newState.records[index] = {...newState.records[index], active: !newState.records[index].active
            };
            return newState;
        }
        default:
            return state;
    }
}