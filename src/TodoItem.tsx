import React from 'react';
import './App.css';

class TodoItem extends React.Component {
  render() {
    const todoStatus = this.props.todo.completed ? "Completed" : "Pending";
    const todoStatusColor = this.props.todo.completed ? "cyan" : "gray";
  
    return (
      <div className="todo-item responsive-form-padded">
        <p className="todo-title">{this.props.todo.title}</p>
        <p className="todo-description">{this.props.todo.description}</p>
        <p style={{ color: todoStatusColor }} className="todo-status">{todoStatus}</p>
        {!this.props.todo.completed && <button style={{ marginRight: 10 }} onClick={() => this.props.onCompleted(this.props.todo)}>Complete</button>}
        <button onClick={() => this.props.onDelete(this.props.todo)}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;