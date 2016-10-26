const task = (state = {}, action) => {
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

const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, task(undefined, action)]
        case 'REMOVE_TASK':
            return state.filter((t) => t.id !== action.id);
        case 'TOGGLE_ORDER_TASKS':
            return [...state].reverse();
        case 'EDIT_TASK':
            return state.map((t) => {
                if (t.id === action.id) {
                    t.name = action.name;
                    return t;
                } else {
                    return t;
                }
            });
        case 'EDIT_PRIORITY':
            return state.map((t) => {
                if (t.id === action.id) {
                    t.priority = action.priority;
                    return t;
                } else {
                    return t;
                }
            });
        default:
            return state;
    }
}

export default tasks