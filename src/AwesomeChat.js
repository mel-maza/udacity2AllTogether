import React, { Component } from 'react';
import MessageHistory from './MessageHistory';
import AddMessage from './AddMessage';

class AwesomeChat extends Component {

	render() {
      	const { key , username , messages , onMessageAdded } = this.props;
    	return (
        	<div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div key={key} className="name sender">{username}</div>
			  <MessageHistory messages={messages} username={username} />
              <AddMessage onMessageAdded={onMessageAdded} username={username}/>
           	</div>
        )
    }
}

export default AwesomeChat;