import React, {Component} from 'react';


function getImage (content) {
  const imgRegExp = /https?:\/\/.*\.(?:png|jpg|gif)/i;
  const imageMatch = content.match(imgRegExp)
  if(imageMatch) {
   return imageMatch[0]
  } else {
    return null;
  }
}

function filterImage(content) {
  const imgRegExp = /https?:\/\/.*\.(?:png|jpg|gif)/i;
  const imgMatch = content.match(imgRegExp)
  const filter = content.replace(imgRegExp, "")
  return filter;
}

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
      console.log("Hello")
      let image = getImage(this.props.content)
      return (
        
        <div className="message">
          <span style={this.state.myStyle} className="message-username">{this.props.username}</span>
          <span className="message-content">{filterImage(this.props.content)} <div>{image && <img className="message-img" src={image}/>}</div></span>
    
        </div>
      
      );         
    }
  }
  
  export default Message;