let taskId = 0;

export const addTask = (name, priority) => {
    return {
        type: 'ADD_TASK',
        id: taskId++,
        name,
        priority
    }
}

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id
    }
}

export const editTask = (name, id) => {
    return {
        type: 'EDIT_TASK',
        id,
        name
    }
}

export const editPriority = (priority, id) => {
    return {
        type: 'EDIT_PRIORITY',
        id,
        priority
    }
}

export const toggleOrderTasks = () => {
    return {
        type: 'TOGGLE_ORDER_TASKS'
    }
}
