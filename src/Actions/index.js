import * as types from "../Constants";

export function addDetailData(value) {
    return {
        type: types.DETAIL_ADD_DATA,
        value
    }
}

export function addGridData(value) {
    return {
        type: types.GRID_ADD_DATA,
        value
    }
}

export function filterGrid(value) {
    return {
        type: types.GRID_FILTER,
        value
    }
}

export function startDetailLoading() {
    return {
        type: types.DETAIL_START_LOADING
    }
}

export function startGridLoading() {
    return {
        type: types.GRID_START_LOADING
    }
}

export function stopDetailLoading() {
    return {
        type: types.DETAIL_STOP_LOADING
    }
}

export function stopGridLoading() {
    return {
        type: types.GRID_STOP_LOADING
    }
}

export function toggleGridChange(value) {
    return {
        type: types.GRID_TOGGLE_ACTIVE,
        value
    }
}