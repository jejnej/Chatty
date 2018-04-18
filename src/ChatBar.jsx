import React, {Component} from 'react';


class ChatBar extends Component {
 constructor(props) {
   super(props);
   this.state = {content: ""}
 }
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.newMessage(e.target.value);
      e.target.value = "";
    }
  }

  render() {
      return (     
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this._handleKeyPress} value={this.state.value} />
        </footer>
      );
    }
  } 
  
  export default ChatBar;


 
