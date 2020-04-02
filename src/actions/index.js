import { ADD_TODO, DELETE_TODO, RECIEVE_TODOS, CHANGE_STATUS, DELETE_ALL } from '../constants';

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1ODU5MjQxOTl9.VHGweGClSCcwuCB2tWXWXzCYr8_n9tcKhNeZAHt6nPg'


export const addTodo = (todo) => {
    const action = {
        type: ADD_TODO,
        todo
    }
    return action;
} 


export const getTodos = () => dispatch => {
    return fetch(
        'http://51.15.86.4:8006/API/v1/todo/',
        {headers: {'Authorization': token} }
    )
        .then((res)=> res.json())
        .then(res => dispatch(recieveTodos(res.objects)))
}

export const recieveTodos = (todos) => {
    const action = {
        type: RECIEVE_TODOS,
        todos

    }
    return action;
}

export const makeTodo = (text) => dispatch => {
    return fetch(
        'http://51.15.86.4:8006/API/v1/todos/',
        {
            method: 'POST',
            headers: {'Authorization': token},
            body: JSON.stringify({text: text})
        }
    )
        .then(res => res.json())
        .then(res => dispatch(addTodo(res)))
}

export const changeStatus = (todo) => {
    const action = {
        type: CHANGE_STATUS,
        todo
    }
    return action;
}

export const switchStatus = (id, text, status) => dispatch => {
    const request = fetch(
        `http://51.15.86.4:8006/API/v1/todos/${id}/`,
        {
            method: 'PUT',
            headers: {'Authorization': token},
            body: JSON.stringify({text: text, completed: status})
        }
    )
        .then(res => res.json())
        .then(res => dispatch(changeStatus(res)))

}

export const deleteTodo = (id) => {
    const action = {
        type: DELETE_TODO,
        id
    }
    return action;
}

export const removeTodo = (id) => dispatch => {
    return fetch (
        `http://51.15.86.4:8006/API/v1/todos/${id}/`,
        {
            method: 'DELETE',
            headers: {'Authorization': token},
        }
    )
        .then(res => dispatch(deleteTodo(id)))
}

export const deleteAll = () => {
    const action = {
        type: DELETE_ALL,

    }
    return action;
}

export const removeAll = (todos) => dispatch => {
    Promise.all(todos.map(todo =>
        fetch (
            `http://51.15.86.4:8006/API/v1/todos/${todo.id}/`,
            {
                method: 'DELETE',
                headers: {'Authorization': token},
            }
    
        ) 
    ))
        .then(res => dispatch(deleteAll()))
}