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
            return state.tasks.map(t => task(t, action));
        case 'REMOVE_TASK':
            return state.tasks.filter((t) => t.id !== action.id);
        case 'SET_ORDER_OF PRIORITY':
            return Object.assign({}, state, {
                orderOfPriority: action.orderOfPriority
            });
        default:
            return state;
    }
}

export default tasks;