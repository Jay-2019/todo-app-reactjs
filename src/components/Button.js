import React from 'react';
import style from '../style.module.css';
class Button extends React.Component{
    render(){
        return <button type="button" className={style.button}>{this.props.type}</button>
    }
}
export default Button;
