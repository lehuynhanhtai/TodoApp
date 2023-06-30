const initState = [
    { id: 1, name: 'Learn Yoga', completed: false, priority: "Medium" },
    { id: 2, name: 'Learn Java', completed: false, priority: "High" },
    { id: 3, name: 'Learn Sex', completed: false, priority: "Low" }
];

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]

        case 'CHECK_BOX':
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}

export default todoListReducer