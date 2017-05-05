import { Component } from 'react'
import io from 'socket.io-client'
import emoji from 'node-emoji';

import Slide from '../components/slide.js';

class HomePage extends Component {
  // fetch old messages data from the server
  static async getInitialProps ({ req }) {
    // const response = await fetch('http://localhost:3000/messages');
    // const messages = await response.json();
    // return { messages };
    return {};
  }

  static defaultProps = {
    messages: []
  }

  // init state with the prefetched messages
  state = {
    field: '',
    messages: this.props.messages
  }

  // connect to WS server and listen event
  componentDidMount () {
    // this.socket = io('http://localhost:3000/');
    // this.socket.on('message', this.handleMessage);
  }

  // close socket connection
  componentWillUnmount () {
    // this.socket.off();
    // this.socket.close();
  }

  handleChange = event => {
    this.setState({ field: event.target.value });
  }

  // send messages to server and add them to the state
  handleSubmit = event => {
    event.preventDefault()

    // create message object
    const message = {
      id: (new Date()).getTime(),
      value: this.state.field
    }

    // send object to WS server
    // this.socket.emit();

    // add it to state and clean current input value
    this.setState(state => ({
      field: '',
      messages: state.messages.concat(message)
    }));
  }

  render () {
    return (
      <Slide>
        Hello World
      </Slide>
    )
  }
}

export default HomePage