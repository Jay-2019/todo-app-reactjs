import React from 'react';
import style from '../style.module.css';
class Filter extends React.Component {
   
    handleClick = (event) => {
        debugger
        console.log(event);
        if (event.target.innerText === "All") {
            return this.props.sendDataToFilteredTodo(this.props.todoItems);
        }
        else if (event.target.innerText === "Active") {
            return this.props.sendDataToFilteredTodo(
                this.props.todoItems.filter((todo) => {
                    return todo.complete === false
                }))

        }
        else if (event.target.innerText === "Completed") {
            return this.props.sendDataToFilteredTodo(
                this.props.todoItems.filter((todo) =>
                    todo.complete === true
                ))
        }
        else
            return console.log("enter todo");

    };
    render() {

        return (<React.Fragment>
             <br /> 
            <button type="button" name="All" id="All" onClick={this.handleClick} className={style.button}>All</button>
            <br />
            <button type="button" name="Active" id="Active" onClick={this.handleClick} className={style.button}>Active</button>
            <br />
            <button type="button" name="Completed" id="Completed" onClick={this.handleClick} className={style.button}>Completed</button>
        </React.Fragment>);
    }
}
export default Filter;