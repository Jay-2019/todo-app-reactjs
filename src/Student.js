// import require module
import React, {Component} from 'react';
import pt from 'prop-types';

// create component - component name must start in capital later
class Student extends Component {
  // Event Handler function.. 
    handleclick = ()=>{
console.log("Result out",this);
// modified state's values
this.setState({name:"Sonam", age:22, roll:164870});
    };
  

    state={
        name:this.props.name,
        age: 21,
        roll: this.props.roll
    };
   
    render(){
        return  <React.Fragment>
                 
                 <h1> <button onClick={this.handleclick}> On_Click </button> </h1>
                  <p> <b> {this.props.wish} </b></p>
                 <h1>Hello {this.state.name} Age {this.state.age} your Roll Number is {this.state.roll}  you have passed 
                  with    {this.props.marks}% marks</h1>
                   </React.Fragment>
    };
};

Student.pt = {
    name: pt.string.isRequired,
     roll: pt.number.isRequired,
     wish: pt.string.isRequired
};
// export component

export default Student;