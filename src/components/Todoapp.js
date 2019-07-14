
import React, { Component } from 'react';
import List from './List';
import Textbar from './Textbar';
import style from '../style.module.css';
import Button from './Button';
import uuid from "uuid";

class Todoapp extends Component {

  state = {
    todoItems: []
  };

  addTodo = (addtitle) => {
    const newTodo = {
      id: uuid.v4(),
      title: addtitle,
      completed: false
    }
    
    this.setState({ todoItems: [...this.state.todoItems, newTodo] });
  };

  render() {
    return (
      <div className={style.container} >
        <br />  <br />  <br />  <br />  <br />  <br />

        <h1 >TO DO</h1>
        <Textbar addNewTodo={this.addTodo} />

        <List listTodoItems={this.state.todoItems} />
        <Button type="All" />
        <br />
        <Button type="Active" />
        <br />
        <Button type="Completed" />

      </div>
    )

  };
};
export default Todoapp;




