import React from 'react';
import style from '../style.module.css';

class Textbar extends React.Component{

  state={
    title:""
  }

  handleChange = (event) =>{
    this.setState({ title: event.target.value });
  };

handleSubmit=(event)=>{
  event.preventDefault(); 
  const k = document.getElementById("enterTodo").value;
 if(k === ""){
   alert("Please Enter Your TODO...");
   return 
 }else{
  this.props.addNewTodo(this.state.title);
  this.setState({ title: "" });
  }
};



     render(){
         return(   <div>
                   <form  onSubmit={this.handleSubmit}  >
                     
                    <input id="enterTodo" type="text" placeholder="Add todo..." size='30' onChange={this.handleChange} className={style.textbar} />
                    <input type="submit" value="Submit"  className={style.btn} />
               
                  </form>
                  </div>
               );
    };
  
};
export default Textbar;