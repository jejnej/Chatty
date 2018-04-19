import React, {Component} from 'react';



class Message extends Component {
 constructor(props) {
  super(props)
  this.state =  {
    myStyle: {
      color:this.props.color 
    }  
  }
 }
 
    render() {
      return (
        
        <div className="message">
          <span style={this.state.myStyle} className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      
      );
    }
  }
  
  export default Message;