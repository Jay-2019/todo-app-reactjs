import React from 'react';
import style from '../style.module.css';

class Textbar extends React.Component{

  state={
    title:''
  }



handleSubmit=(event)=>{
  event.preventDefault(); 
const k=document.getElementById("enterTodo").value;
if(k===""){
  alert("Plese enter your TODO ");
return false
}else
this.props.newData(k);
};



     render(){
         return(   <div>
                   <form  onSubmit={this.handleSubmit}  >
                     
                    <input id="enterTodo" type="text" placeholder="Add todo..." size='30' onChange={this.handleChange}  />
                    <input type="submit" value="Submit"  className={style.btn} />
               
                  </form>
                  </div>
               );
    };
  
};
export default Textbar;