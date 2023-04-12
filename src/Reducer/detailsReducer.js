const detailsRecords = [
    {
        id: 1,
        name: "John Doe",
        about: "Nice guy",
        hobby: "Likes drinking wine",
        skills: ["html", "javascript", "redux"]
    },
    {
        id: 2,
        name: "Mary Moe",
        about: "Cute girl",
        hobby: "Likes playing xbox whole days long",
        skills: ["Fortran", "Lua", "R#"]
    },
    {
        id: 3,
        name: "Peter Noname",
        about: "Incognito",
        hobby: "Likes to be invisible",
        skills: ["hide","security","anonymous"]
    }
];

export function detailsReducer(state = detailsRecords, action) {
    switch (action.type) {
        default:
            return state;
    }
}
