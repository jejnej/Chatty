import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
      return (
        <ol className="messages">
        
          <Message />
        </ol>
      );
    }
  }
  
  export default MessageList;