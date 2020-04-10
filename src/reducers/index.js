import { ADD_TODO, DELETE_TODO, RECIEVE_TODOS, CHANGE_STATUS, DELETE_ALL, LOGIN } from '../constants';
import { bake_cookie, read_cookie} from 'sfcookies'

/*const todo = (action) => {
    let { text } = action;
    return {
        id: Math.random(),
        text
    }
}*/

const todos = (state = [], action) => {
    let todos = null;
    //state = read_cookie('todos')
    switch(action.type) {
        case ADD_TODO:
            todos = [...state, action.todo]
            //bake_cookie('todos', todos)
            return todos;

        case DELETE_TODO:
            todos = [...state.filter(todo => todo.id !== action.id)]
            //bake_cookie('todos', todos)
            return todos;
        case RECIEVE_TODOS:
            todos = [...action.todos]
            return todos;
        case CHANGE_STATUS:
            todos = state.map(todo => {
                if (todo.id === action.todo.id) {
                    return action.todo;
                } else {
                    return todo;
                }
            })
            return todos;
        case DELETE_ALL:
            todos = []
            return todos;
        default:
            return state;

    }
}

export default todos;