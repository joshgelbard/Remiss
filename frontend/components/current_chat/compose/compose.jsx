import React from 'react';

class Compose extends React.Component {

  constructor() {
    super();
    this.state = { body: '' };
  }

  update(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = {channel_id: this.props.channel.id, body: this.state.body};
    this.props.postMessage(message)
      .then(() => this.setState({body: ''}));
  }

  render(){
    const { channel } = this.props;
    return (
      <form className='compose' onSubmit={this.handleSubmit.bind(this)}>
        <input placeholder={`Message #${this.props.channel.name}`}
          onChange={this.update.bind(this)}
          value={this.state.body}/>
      </form>
    );
  }
}

export default Compose;
