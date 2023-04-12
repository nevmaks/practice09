const gridRecords = [
    {id: 1, firstName: "John", lastName: "Doe", active: false},
    {id: 2, firstName: "Mary", lastName: "Moe", active: false},
    {id: 3, firstName: "Peter", lastName: "Noname", active: true}
];

let gridInitState = {
    records: [...gridRecords],
    filter: ''
}

export function gridReducer(state = gridInitState, action) {
    switch (action.type) {
        case "FILTER": {
            let newState = {...state};
            newState.filter = action.value;
            return newState;
        }
        case "TOGGLE_ACTIVE": {
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