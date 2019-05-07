import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        desc: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        fetch('http://51.15.60.180/api/Commodity', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              $class: 'org.example.mynetwork.Commodity',
              tradingSymbol: this.state.name,
              description: this.state.desc,
              mainExchange: 'Dollar',
              quantity: '1',
              owner: 'resource:org.example.mynetwork.Trader#procurement',
            })
        })
        .then((resp)=>{
            console.log(resp);
        })
        .catch((err)=>{
            console.log(err);
        });
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={(text)=> this.setState({name: text.target.value})} />
          </label>
          <label>
            Description:
            <input type="text" value={this.state.desc} onChange={(text)=> this.setState({desc: text.target.value})} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default App;
