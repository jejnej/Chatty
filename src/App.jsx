import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentUser: {name: "Jody"}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: []
      };
  }

  onNewMessage = (text) => {
     const message = {
        username: this.state.currentUser.name,
        content:text 
     };
     console.log("Message: ", this.socket)   
    this.socket.send(JSON.stringify(message));
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = (event) => {
    console.log("Connected to Server")
    }
    this.socket.onmessage = (event) => {
      const receivedMessage= JSON.parse(event.data);
      this.setState({messages: this.state.messages.concat(receivedMessage)});
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
