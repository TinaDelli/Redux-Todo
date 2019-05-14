import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted } from '../actions';

class TodoList extends React.Component {
    state= {
        newTodo: '',
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault()
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''});
    };

    toggleCompleted = id => {
        this.props.toggleCompleted(id);
    };

    render(){
        return (
            <>
            <div className="todo-list">
            {this.props.todos && 
            this.props.todos.map(todo => (
                <h4 onClick={() => this.toggleCompleted(todo.id)} key={todo.id}>
                {todo.name}
                {todo.completed && <i className="fas fa-check-circle" />}
                </h4>
            ))}
            </div>
            <input 
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add in something to do!"
            />
            <button onClick={this.addTodo}>Add Todo</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo, toggleCompleted })(TodoList);