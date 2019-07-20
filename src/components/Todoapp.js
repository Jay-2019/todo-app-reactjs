
import React, { Component } from 'react';
// import List from './List';
import Textbar from './Textbar';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import style from '../style.module.css';
import Filter from './Filter';
import PrintFilterData from './PrintFilterData';
import List from './List';
import uuid from "uuid";



class Todoapp extends Component {

  state = {
    todoItems: [],
    filteredTodoItems: []
  };

  filteredTodo = (Data) => {
    this.setState({ filteredTodoItems: Data });
  }

  // CallBack funtion
  addTodo = (addtitle) => {
    const newTodo = {
      id: uuid.v4(),
      title: addtitle,
      complete: false
    }

    this.setState({ todoItems: [...this.state.todoItems, newTodo] });
  };

  markComplete = (id) => {
    this.setState({
      todoItems: this.state.todoItems.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete; //true
        }
        return todo;
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({ todoItems: [...this.state.todoItems.filter((todo) => { return todo.id !== id })] });
  };

  render() {
    return (
      <div className="container">
        <div className={style.container}>

          <br />  <br />  <br />  <br />  <br />  <br />

          <h1 >TO DO</h1>
          <Textbar addNewTodo={this.addTodo} />

          {/* <List listTodoItems={this.state.todoItems} /> */}
          <List todoItems={this.state.todoItems} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
          {/* <Filter data={} result={this.afterFilter}/> */}

          <Filter todoItems={this.state.todoItems} sendDataToFilteredTodo={this.filteredTodo} />
          &nbsp;
         <PrintFilterData filteredTodoItem={this.state.filteredTodoItems} />
        </div>
      </div>
    )

  };
};
export default Todoapp;
