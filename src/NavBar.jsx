import React, {Component} from 'react';

class NavBar extends Component {
  
  componentWillMount() {
    console.log("at componentWillMount")
  }
  render() {
    return (
      
      <nav className="navbar">
         <img src="/docs/chats.png" />
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="user-count">{this.props.numUsers} users online.</span>
      </nav>
    );
  }
}

export default NavBar;