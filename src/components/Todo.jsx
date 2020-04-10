import React, { Component } from 'react';
import { makeTodo, deleteTodo, getTodos, switchStatus, removeTodo, removeAll } from '../actions';
import { connect } from 'react-redux';


class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }





    handleChange(event) {
        this.setState({text: event.target.value})
        console.log(this.state.text)
    }

    addTodo() {
        this.props.makeTodo(this.state.text);
        this.setState({text: ''})
    }

    deleteTodo(id) {
        this.props.removeTodo(id)
    }

    changeStatus(todo) {
        this.props.switchStatus(todo.id, todo.text, !todo.completed)
    }

    deleteAll(todos) {
        this.props.removeAll(todos)

    }


    renderTodos() {
        const {todos} = this.props;
 
        return (
            /*<div className='grid-container'>
                {todos.map(todo => {
                    return (
                        <div key={todo.id} className="todo-item">
                            <input className="checkbox" type='checkbox' checked></input>
                            <span className='todo-text'> {todo.text} </span>
                            <span 
                                type='button' 
                                className='delete-todo' 
                                onClick = {() => this.deleteTodo(todo.id)}>x</span>
                        </div> 
                    )
                })
                }
            </div>*/
            <div>
                <div className="grid-container">
                    {todos.map(todo => {
                        return (
                            <div key={todo.id} className="todo-item">
                                <input 
                                    type="checkbox" 
                                    id={todo.id} 
                                    className="hidden-box" 
                                    defaultChecked = {todo.completed} 
                                    onClick = {() => this.changeStatus(todo)}
                                />
                                <label for={todo.id} className="check--label">
                                    <span className="check--label-box"></span>
                                    <span className="todo-text-wrapper">
                                        <span className="todo-text">{todo.text}</span>
                                    </span>
                                    <span 
                                    type='button' 
                                    className='delete-todo' 
                                    onClick = {() => this.deleteTodo(todo.id)}>x</span>
                                </label>
                            </div>
                        )
                    })
                    }

                </div>
                <button
                type = 'button'
                className = "delete-button"
                onClick = {() => this.deleteAll(todos)}
                hidden = {todos.length === 0 ? true : false}
                >Delete all</button> 
            </div>
        )
        
    }

    componentDidMount() {
        this.props.getTodos()
        
    }
    

    render () {
        
        return (
                <div className = 'App'>
                    <div className = 'title'> ToDo </div>
                    <div>
                        <div className='form-group'>
                            <input 
                                className ='form-control'
                                placeholder ='What needs to be done?'
                                onChange = {this.handleChange}
                                value = {this.state.text}
                                onKeyPress = {target => (target.charCode === 13 ? this.addTodo() : undefined)}

                            /> 
                            <button
                                type="button"
                                className="add-button"
                                onClick = {() => this.addTodo()}
                            >
                                Add
                            </button>
                        </div>
                        
                    </div>
                    {this.renderTodos()}
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, {makeTodo, deleteTodo, getTodos, switchStatus, removeTodo, removeAll}) (Todo);