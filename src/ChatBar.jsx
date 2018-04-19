import React, {Component} from 'react';


class ChatBar extends Component {
 constructor(props) {
   super(props);
   this.state = {content: ""}
 }
  _handleKeyPressMessage = (e) => {
    if (e.key === 'Enter') {
      this.props.newMessage(e.target.value);
      e.target.value = "";
    }
  }

  _handleKeyPressUser = (e) => {
    if (e.key === 'Enter') {
      this.props.changeUser(e.target.value);
    }
  }

  render() {
      return (     
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} onKeyPress={this._handleKeyPressUser}/>
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this._handleKeyPressMessage} value={this.state.value} />
        </footer>
      );
    }
  } 
  
  export default ChatBar;


  
