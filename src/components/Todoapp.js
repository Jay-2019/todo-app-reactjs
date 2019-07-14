
import React, { Component } from 'react';
import List from './List';
import Textbar from './Textbar';
import style from '../style.module.css';
import Button from './Button';

class Todoapp extends Component {

  state = {
    todoItems: []
  };

  currentData = (TextBarData) => {
    this.setState({ todoItems: [...this.state.todoItems, TextBarData] });
  };

  render() {
    return (
      <div className={style.container} >
        <br />  <br />  <br />  <br />  <br />  <br />

        <h1 >TO DO</h1>
        <Textbar newData={this.currentData} />

        <List newTodoItems={this.state.todoItems} />
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




