import React from 'react'
import logo from '../fire.svg'; 
import search from '../search-solid.svg';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand ml-1.25" href="#">Personal Fitness To-Do List</Link>
        <img src={logo} alt="logo" style={{width: "25px", height: "25px"}}></img>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{color:"#fff" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
            <li className="nav-item active">
                <Link className="nav-link text-black text-uppercase ml-5" to="/home">Home
                <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black text-uppercase ml-5" to="/new-list">New List</Link>
            </li>
    
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                <img src={search} alt="search" style={{width: "35px", height: "25px"}}></img>
            </button>
            </form>
        </div>
        </nav>

    );
}

export default Navbar; 