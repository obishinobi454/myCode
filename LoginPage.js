import React from 'react';
//import logo from './login.svg';
import '../../App.scss';
import { Login, Register } from "../login"; 

/* //form errors

const formValid = formErrors => { 
  let valid = true; 

  Object.values(formErrors).forEach(val => { 
      val.length > 0 && (valid = false); 
  }); 
  return valid; 
}; 
 */
class LoginPage extends React.Component { 

  constructor(props) {
    super(props); 
    this.state = {   
       /*  username: null, 
        password: null, 
        email: null,  */
      isLogginActive: true, 
    }; 
  }

  //sumbit handler

  /* handleSubmit = e => { 
    e.preventDefault(); 

    if(formValid(this.state.formErrors)){
        console.log(`
        --SUBMITTING--
          Username: ${this.state.username}
          Password: ${this.state.password}
          Email: ${this.state.email}
         
        `); 
    } else { 
        console.error("--LOGIN INVALID--")
    }

};  */
  componentDidMount() { 
    this.rightSide.classList.add("right"); 
  }

  changeState() { 
    const { isLogginActive } = this.state; 

    if (isLogginActive) { 
      this.rightSide.classList.remove("right"); 
      this.rightSide.classList.add("left"); 
    } else { 
      this.rightSide.classList.remove("left"); 
      this.rightSide.classList.add("right"); 
    }

    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive })); 

  }

  render() { 
    const { isLogginActive } = this.state; 
    const current = isLogginActive ? "Register" : "Login"; 
    const currentActive = isLogginActive ? "Login" : "Register"; 
    return (
      <div className="App">
         
        <div className="login"> 
       <br/>
          <div className="container" ref={ref => (this.container = ref )}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)}/>
              )}
          </div>
            <RightSide current={current} 
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)} 
            onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
    ); 
  }
}

const RightSide = props => {
  return (
  <div 
    className="right-side" 
      ref={props.containerRef} 
        onClick ={props.onClick}
  >
    <div className="inner-container">
        <div className="text">{props.current}</div>
      </div> 
  </div>
  ); 
}; 

export default LoginPage;