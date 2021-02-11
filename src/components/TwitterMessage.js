import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: '', charCount: this.props.maxChars };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      charCount: this.props.maxChars - event.target.value.length
    })
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={e => this.onInputChange(e)}
          value={this.state.message}
        />
        <p>Characters Remaining: {this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
