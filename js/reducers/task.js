const task (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                id : action.id,
                name : action.name,
                priority : action.priority
            }
        default:
            return state;
    }
}

const tasks (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return state.map(t => task(t, action));
        case 'REMOVE_TASK':
            return state.filter((t) => t.id !== action.id);
        default:
            return state;
    }
}