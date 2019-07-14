import React, {Component} from 'react';


class List extends Component{

   render(){

            let listItems = this.props.newTodoItems.map((value)=> {
               console.log(value)
            return   <li key={value.toString()}> {value.toUpperCase()} </li>
            });
          return ( 
                <ul>
                   {
                     listItems
                   }
               
               </ul>  
               
         )
                
    }
};
export default List;