import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filtersChoseRadio = (state) => state.filters.status;
export const filtersChosePriority = (state) => state.filters.priority;

export const todoRemaningSelector = createSelector(
    todoListSelector,
    filtersChoseRadio,
    searchTextSelector,
    filtersChosePriority,
    (todoList, status, searchText, priority) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priority.length
                    ? todo.name.includes(searchText) && priority.includes(todo.priority) : todo.name.includes(searchText);
            }

            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priority.length ? priority.includes(todo.priority) : true)
            )
        })
    }
)
