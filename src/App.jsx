import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentUser: "Anonymous",  // optional. if currentUser is not defined, it means the user is Anonymous
        messages: []
      };
  }

  onNewMessage = (text) => {
     const message = {
       type:"postMessage",
        username: this.state.currentUser,
        content:text 
     };  
    this.socket.send(JSON.stringify(message));
    // this.setState({messages:[...this.state.messages, message]});
  }

  onNewUser = (newName) => {
    console.log(newName);
    const user = {
      type: "notification",
      newUser: newName,
    };  
    this.socket.send(JSON.stringify(user));
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = (event) => {
    console.log("Connected to Server")
    }
    
    this.socket.onmessage = (event) => {
      const newData= JSON.parse(event.data);
      switch(newData.type) {
        case "postMessage":
        this.setState({messages:[...this.state.messages, newData]}); 
        break;
        
          case "newUser":
          this.setState({currentUser:newData.newUser});
          break;
        // case "notification":
    
        //   break;
        // case "totalUsers":
      
        //   break;
        
      }   
    }
  
  }
  
    render() {
    return (
    <div> 
    <NavBar />
    <main>
     <MessageList messages = {this.state.messages} />
    </main>
    <ChatBar currentUser = {this.state.currentUser} changeUser = {this.onNewUser} newMessage={this.onNewMessage}/>
    </div>
    );
  }
  
}
export default App;
