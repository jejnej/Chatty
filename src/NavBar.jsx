import React, {Component} from 'react';

class NavBar extends Component {
  
  render() {
    return (
      
      <nav className="navbar">
         <img src="/docs/chats.png" />
        <a href="/" className="navbar-brand">Chatty</a>
        <div className="user-count">{this.props.numUsers} users online.</div>
      </nav>
    );
  }
}

export default NavBar;