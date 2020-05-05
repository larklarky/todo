import { ADD_TODO, DELETE_TODO, RECIEVE_TODOS, CHANGE_STATUS, DELETE_ALL, LOGIN, SIGNUP } from '../constants';


export const addTodo = (todo) => {
    const action = {
        type: ADD_TODO,
        todo
    }
    return action;
} 


export const getTodos = () => dispatch => {
    const token = localStorage.getItem("token")
    return fetch(
        'http://51.15.86.4:8006/API/v1/todo/',
        {headers: {'Authorization': token} }
    )
        .then((res)=> {
            console.log('response', res)
            if(res.status === 403) {

                window.location.href = '/login'
            } 
            return res.json()
        })
        .then(res => dispatch(recieveTodos(res.objects)))
        .catch((reason) =>console.log('rrrrrrrrr', reason))
}

export const recieveTodos = (todos) => {
    const action = {
        type: RECIEVE_TODOS,
        todos

    }
    return action;
}

export const makeTodo = (text) => dispatch => {
    const token = localStorage.getItem("token")
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
    const token = localStorage.getItem("token")
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
    const token = localStorage.getItem("token")
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
    const token = localStorage.getItem("token")
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

export const login = (data) => {
    console.log('data', data)
    localStorage.setItem("token", 'Bearer ' + data.access_token);
    window.location.href = '/'
    const action = {
        type: LOGIN,
    }
    return action;
}

export const getToken = (mail, password) => dispatch => {
    console.log('getting token', JSON.stringify({mail: mail, password: password}))
    return fetch (
        'http://51.15.86.4:8006/API/v1/token',
        {
            method: 'POST',
            body: JSON.stringify({email: mail, password: password})
        }
    )
    .then(res => res.json())
    .then(res => dispatch(login(res)))
}

export const signUp = (data) => {
    console.log('data reg', data)
    window.location.href = '/login'
    const action = {
        type: SIGNUP,
    }
    return action;
}

export const createToken = (user, mail, password) => dispatch => {
    return fetch (
        'http://51.15.86.4:8006/API/v1/users/',
        {
            method: 'POST',
            body: JSON.stringify({name: user, email: mail, password: password})
        }
    )
    .then((res)=> {
        console.log('response', res)
        if(res.status === 422) {

            window.location.href = '/signup'
        } 
        return res.json()
    })

    .then(res => dispatch(signUp(res)))
} 
