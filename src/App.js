import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.jsx';
import Done from './components/done.jsx';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      idSubmitted:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.setState({
      idSubmitted : true
    })
  }

  render() {

    const Component = this.state.idSubmitted ? <Done/> : <Main onSubmit={this.handleSubmit}/>;

    return (
      <div className="App" style = {{backgroundImage: "url('https://media.giphy.com/media/25LxRtoT97mGOfE6Lh/giphy.gif')"}}>
        <header className="App-header">
          {Component}
        </header>
      </div>
    );
  }
}

export default App;
