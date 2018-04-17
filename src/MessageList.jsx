import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
  const messages = this.props.messages;
  const messageList = messages.map((message) => {
    return  (
      <Message
      key = {message.id}
      username={message.username}
      content = {message.content} 
      />
    );
  });  
      return (        
        <div className="messages">
        {messageList}
        </div>
      );
    }
  }
  
  export default MessageList;

