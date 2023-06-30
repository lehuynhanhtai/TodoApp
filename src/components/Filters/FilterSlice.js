const initState = {
    search: '',
    status: 'All',
    priority: []
};


const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_TEXT':
            return {
                ...state,
                search: action.payload
            }
        case 'CHOSE_RADIO':
            return {
                ...state,
                status: action.payload
            }
        case 'CHOSE_PRIORITY':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state
    }
}

export default filterReducer