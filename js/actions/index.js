let taskId = 0;

export const addTask = (task, priority) => {
    return {
        type: 'ADD_TASK',
        id: taskId++,
        task,
        priority
    }
}

export const removeTask = (taskId) => {
    return {
        type: 'REMOVE_TASK',
        taskId
    }
}

export const prioritiseTasks = (orderOfPriority) => (
    return {
        type: 'SET_ORDER_OF PRIORITY',
        orderOfPriority
    }
)