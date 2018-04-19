const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');


// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};



// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  let totalUsers = wss.clients.size;
  let numberUsers = {
    id: uuidv1(),
    type: 'numberUsers',
    totalUsers: totalUsers,
  }

  wss.broadcast(JSON.stringify(numberUsers));

  ws.on('message', (message) => {
    const parsedData = JSON.parse(message);
   
    switch(parsedData.type) {
     case "postMessage":
     const displayMessage = { 
      id: uuidv1(),
      type: "incomingMessage",
      username: parsedData.username,
      content: parsedData.content
    };
    wss.broadcast(JSON.stringify(displayMessage));
    break;
    
   case "postNotification":
   let displayNotification = {
     id: uuidv1(),
     type:"incomingNotification",
     content: parsedData.content
   };
   let newName = {
     id:uuidv1(),
     type:"newUser",
     newUser: parsedData.newUser
   };
   wss.broadcast(JSON.stringify(displayNotification));
   ws.send(JSON.stringify(newName));
   break;

   case "numberUsers":
      const totalUsers = wss.clients.size;
      ws.send(totalUsers);
      break;
      default:
      throw new Error("Unknown event type " + message.type);
    }
  
   
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));

 
 
 
});