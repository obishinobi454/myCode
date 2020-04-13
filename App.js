import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/layouts/Navbar'; 
import Footer from './components/layouts/Footer';

// React Router Import
import { Switch, Route } from 'react-router-dom'; 

// Import Pages
import Home from './components/pages/Home'; 
import NewListCreated from './components/pages/NewListCreated'; 
import YourLists from './components/pages/YourLists'; 
import NotFound from './components/pages/NotFound'; 
import LoginPage from './components/pages/LoginPage'; 

//Login
import './App.scss';
import { Login, Register } from "./components/login"; 



class App extends React.Component { 

/*   constructor(props) {
    super(props); 
    this.state = {   
        username: null, 
        password: null, 
        email: null,  
      isLogginActive: true, 
    }; 
  } 

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
  */

  render() {
   /*  const { isLogginActive } = this.state; 
    const current = isLogginActive ? "Register" : "Login"; 
    const currentActive = isLogginActive ? "Login" : "Register";  */
    return (
      <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
      
        <Switch> 
          <Route exact path="/home" component={Home}/> 
          <Route path="/new-list" component={NewListCreated}/> 
          {/* <Route path="/your-lists" component={YourLists}/>  */}
          <Route path="/login-page" component={LoginPage}/> 
          <Route component={NotFound} />
        </Switch> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>

       {/*  <div className="App">
        <div className="login"> 
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
        </div> */}
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

export default App;
