import React from 'react';
import uuid from "uuid";

class PrintFilterData extends React.Component {


    render() {


        return <div>
            {this.props.filteredTodoItem.map((todo) => {
                return (<li key={uuid.v4()}>{todo.title}</li>)
            })}
        </div>


    }
}
export default PrintFilterData;