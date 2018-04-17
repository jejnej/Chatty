import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const messages = [
  {
      type: "incomingMessage",
      content: "I won't be impressed with technology until I can download food.",
      username: "Anonymous1"
  },
  {
      type: "incomingNotification",
      content: "Anonymous1 changed their name to nomnom",
  },
  {
      type: "incomingMessage",
      content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
      username: "Anonymous2"
  },
  {
      type: "incomingMessage",
      content: "...",
      username: "nomnom"
  },
  {
      type: "incomingMessage",
      content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
      username: "Anonymous2"
  },
  {
      type: "incomingMessage",
      content: "This isn't funny. You're not funny",
      username: "nomnom"
  },
  {
      type: "incomingNotification",
      content: "Anonymous2 changed their name to NotFunny",

  },

]

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
            id: "5",
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      }
  }


    render() {
    return (
    <div> 
    <NavBar />
    <main>
     <MessageList messages = {this.state.messages} />
    </main>
    <ChatBar currentUser = {this.state.currentUser.name}/>
    </div>
    );
  }
  
}
export default App;




