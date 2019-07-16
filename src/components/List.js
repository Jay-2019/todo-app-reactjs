import React from 'react';
// import style from '../style.module.css';
class List extends React.Component {
    render() {

        return <div>
            {this.props.todoItems.map(item => {
                return (
                    <li key={item.id}>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, item.id)} checked={item.complete ? "checked" : ""} />
                        {" "}
                        &nbsp;
                        {item.title}
                        &nbsp;
                        &nbsp;
                        <button onClick={this.props.deleteTodo.bind(this, item.id)} >Delete</button>
                    </li>
                )
            })}
            
        </div>
    }
}
export default List;