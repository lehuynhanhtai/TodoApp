
export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'CHECK_BOX',
        payload: todoId
    }
}

export const searchInput = (text) => {
    return {
        type: 'SEARCH_TEXT',
        payload: text
    }
}

export const filterChangeRadio = (status) => {
    return {
        type: 'CHOSE_RADIO',
        payload: status
    }
}

export const filterPriority = (priority) => {
    return {
        type: 'CHOSE_PRIORITY',
        payload: priority
    }
}