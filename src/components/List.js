import React, {Component} from 'react';


class List extends Component{

   render(){

            let listItems = this.props.listTodoItems.map((value)=> {
               console.log(value)
            return   <li key={value.id}> {value.title.toUpperCase()} </li>
            });
          return ( 
                <ul>
                   {listItems }
               </ul>  
               
         )
                
    }
};
export default List;