import * as types from "../Constants";

export function addData(value) {
    return {
        type: types.ADD_DATA,
        value
    }
}

export function filterGrid(value) {
    return {
        type: types.FILTER,
        value
    }
}

export function startLoading() {
    return {
        type: types.START_LOADING
    }
}

export function stopLoading() {
    return {
        type: types.STOP_LOADING
    }
}

export function toggleChange(value) {
    return {
        type: types.TOGGLE_ACTIVE,
        value
    }
}