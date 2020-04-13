import React from 'react'; 
import { Link } from 'react-router-dom'; 
import backgrnd from '../fit.jpg';
import '../../App.css';
//import LoginPage from './components/pages/LoginPage'; 

function Jumbotron() {
    return (
        
        <div >
        <div className="container"> 
            <div className="row">
                <div className="col-sm-6 btn-holder"> 
                   <img src={backgrnd} alt="background" style={{width: "520px", height: "440px"}}></img>
                </div> 
                <div class="col-sm-6">
            <br/>
            <div> 
                <h1 className="strong"><center>Welcome to your Personal Fitness To-Do List</center></h1>
                <br/>
                <p className="lead"><center>A simple to-do list designed for indiviuals that are organized and motivated like you</center></p>
                
                <hr className="my-4"></hr>
                
                <p className="lead font-italic"><center>To get started, click the button below</center></p> 
                <br/>
            </div>
        <Link className="btn btn-primary btn-lg btn-block" href="#" role="button" to="/login-page">Get Started</Link>
            <br/>
            <br/>
            <br/>
            <br/>
                </div>  
                </div>
            </div>
        </div>
        
    ); 
}

export default Jumbotron; 


