import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Reset.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: 'drop-down-menu'
    }
  }

  handleClick = () => {
    if(this.state.menuStatus === 'drop-down-menu-open') {
      this.setState({menuStatus: 'drop-down-menu-closed'});
    } else {
      this.setState({menuStatus: 'drop-down-menu-open'});
    }
  }

render() {  
  return (
    <nav>
      <ul>
        <div>
        <li>Start Bootstrap</li>
        </div>
         
        <li className="menu-text">SERVICES</li>
        <li className="menu-text">PORTFOLIO</li>
        <li className="menu-text">ABOUT</li>
        <li className="menu-text">TEAM</li>
        <li className="menu-text">CONTACT</li>
        <li>
      
           <img
           onClick={this.handleClick}
           src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" 
           alt="ham_menu" />
         </li>
         <div className={this.state.menuStatus}></div>
      </ul>
      
    </nav>
  )
 }
};

export default App;
