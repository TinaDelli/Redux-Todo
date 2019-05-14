export const UPDATE_TODOLIST_NAME = 'UPDATE_TODO_LIST_NAME';
export function updateTodoListName(newTitle){
    return {
        type: UPDATE_TODOLIST_NAME,
        payload: newTitle
    };
};

export const ADD_TODO = 'ADD_TODO';
export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
};

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    };
};