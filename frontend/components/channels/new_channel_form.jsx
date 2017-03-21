import React from 'react';

class NewChannelForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: '', purpose: '', channel_type: 'CHANNEL'};
  }

  update(attribute) {
    return e => this.setState({ [attribute]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/messages');
  }

  render() {
    return (
      <div className='new-channel-form-container'>
        <form className='new-channel-form' onSubmit={this.handleSubmit.bind(this)}>
          <h1>Create a channel</h1>
          <p>Channels are where your team communicates. They work best when organized around a topic — #leads, for example.</p>
          <label>Name
            <input type='text' value={this.state.name} placeholder='#leads' onChange={this.update('name')}/>
          </label>
          <label>Purpose
            <input type='text' value={this.state.purpose}
               onChange={this.update('purpose')}/>
          </label>
          <div className='new-channel-buttons-row'>
            <button type='button' onClick={this.redirect.bind(this)}>Cancel</button>
            <input type='submit' value='Create Channel' />
          </div>
        </form>
      </div>
   );
  }
}

export default NewChannelForm;
