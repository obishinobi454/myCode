import React, { useState } from 'react'; 
import loginImg from "../../login.svg"; 
/* 
const formValid = formErrors => { 
    let valid = true; 
  
    Object.values(formErrors).forEach(val => { 
        val.length > 0 && (valid = false); 
    }); 
    return valid; 
  }; 
  
  const handleSubmit = (e) => { 
    //alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
        this.useState({value: e.target.value});
 
 };  */

export class Login extends React.Component { 

    constructor(props) {
        super(props); 

    }

    render() {
        return(
            <div className="base-container" ref={this.props.containerRef}>            
                <br/>
                <div className="header"></div>
                <div className="content">
                    <br/>
                    <div className="image">
                    <img src={loginImg} /> 
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" >Login</button>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
        );
    }
   
}
