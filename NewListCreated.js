import React, {Component} from 'react'; 
//import TodoItem from "./components/TodoItem"; 
import Footer from '../layouts/Footer'; 
import TodoList from "../../TodoList"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

class NewListCreated extends Component {
    render() {
        return (
            <div>
                <br/>
                <h1 className="strong"><center>Create your new list:</center></h1>
                <hr className="my-4"></hr>
                <div> 
                    <div className="column">  
                    
              <center><TodoList/></center>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </div>
            </div>
            </div>
   
        ); 
    }

    
}
export default NewListCreated; 