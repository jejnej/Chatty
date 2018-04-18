import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: [
          {
            id: "1", 
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          {
            id: "2",
            username: "Jody",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      }
  }

  onNewMessage = (text) => {
     const message = {
        id: this.state.messages.length +1,
        username: this.state.currentUser.name,
        content:text 
     };
     this.setState({messages:[...this.state.messages, message]});

  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = (event) => {
    console.log("Connected to Server")
    }
 
  }
  
  render() {
    // more code here..
  }

    render() {
    return (
    <div> 
    <NavBar />
    <main>
     <MessageList messages = {this.state.messages} />
    </main>
    <ChatBar currentUser = {this.state.currentUser.name} newMessage={this.onNewMessage}/>
    </div>
    );
  }
  
}
export default App;
