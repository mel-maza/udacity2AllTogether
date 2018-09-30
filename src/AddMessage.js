import React, { Component } from 'react';

class AddMessage extends Component {
	state = {
    	textInput: ''
    }
       /*
    If the user did not type anything, he/she should not be
    allowed to submit.
    */
    isDisabled = () => {
      if (this.state.textInput === '') {
      	return true;
      } else {
      	return false;
      }
    };

	updateTextInput = (textInput) => {
    	this.setState(() => ({
        	textInput: textInput
        }))
    }

	AddMessage = () => {
    	if (this.state.textInput !== '') {
        	this.props.onMessageAdded(this.state.textInput, this.props.username);
        }
    }
	render() {
    	return (
      		<div>
                <form className="input-group" onSubmit={this.AddMessage}>
                  <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.textInput} onChange={(event) => this.updateTextInput(event.target.value)} />
                  <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                      SEND
                    </button>
                  </div>
                </form>
             </div>
      )
    }
}

export default AddMessage;