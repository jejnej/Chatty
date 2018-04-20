import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentUser: "Anonymous", 
        messages: [],
        numUsers: 0,
        color: ""
      };
  }

  // Handles new messages to post 
  onNewMessage = (text) => {
     const message = {
       type:"postMessage",
        username: this.state.currentUser,
        content:text, 
        color: this.state.color
     };  
    this.socket.send(JSON.stringify(message));
  }

  // Handles new user name change and the notification for username change
  onNewUser = (newName) => {
    console.log(newName);
    const user = {
      type: "postNotification",
      newUser:newName,
      content: `📣 ${this.state.currentUser} has changed their name to ${newName}` 
    };  
    this.socket.send(JSON.stringify(user));
  }

// For auto scroll when messages are added
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = (event) => {
    console.log("Connected to Server")
    }
 // Code that interprets incoming messages 
    this.socket.onmessage = (event) => {
// Parsed data back into original objecta and handle the messages by type
      const newData= JSON.parse(event.data);
      switch(newData.type) {
        case "incomingMessage":
        this.setState({messages:[...this.state.messages, newData]});
        console.log(newData) 
        break;
        
        case "newUser":
        this.setState({currentUser:newData.newUser});
        break;
         
        case "incomingNotification":
        this.setState({messages:[...this.state.messages, newData]});
        break;

        case "numberUsers":
        this.setState({numUsers: newData.totalUsers});
        break;

        case "userColor":
        this.setState({color: newData.color})
        break;
        
        default:
        throw new Error("Unknown event type " + newData.type);
      }   
    }
  
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
    
  } 
    render() {
    return (
    <div> 
    <NavBar numUsers = {this.state.numUsers}/>
    <main>
     <MessageList messages = {this.state.messages} />
    </main>
    <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
    <ChatBar currentUser = {this.state.currentUser} changeUser = {this.onNewUser} newMessage={this.onNewMessage}/>
    </div>
    );
  }  
}
export default App;
