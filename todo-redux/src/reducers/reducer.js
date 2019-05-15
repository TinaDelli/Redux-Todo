import { UPDATE_TODOLIST_NAME, ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
    title: 'Enter Your Todo List Title Here',
    todos: [
        { name: 'Wash Dishes', completed: false, id: 12345678},
        { name: 'Do Laundry', completed: false, id: 87654321 }
    ]
};

function reducer (state= initialState, action){
    switch (action.type) {
        case UPDATE_TODOLIST_NAME:
        return {
            ...state,
            title: action.payload
        };
        case ADD_TODO:
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    name: action.payload, 
                    completed: false,
                    id: Date.now()
                }
            ]
        };
        case TOGGLE_COMPLETED:
        return{
            ...state,
            todos: state.todos.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        };
        default: 
        return state;
    }
}


export default reducer;