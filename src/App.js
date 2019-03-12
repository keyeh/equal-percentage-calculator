import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personOneIncome: 145000,
      personTwoIncome: 120000,
      inputAmount: 3500
    }

    this.calculateAnswer = this.calculateAnswer.bind(this);
  }

  calculateAnswer() {
    const {personOneIncome, personTwoIncome, inputAmount} = this.state;
    const percent = inputAmount / (personOneIncome + personTwoIncome);

    return {
      personOneAmount: (personOneIncome * percent).toFixed(2),
      personTwoAmount: (personTwoIncome * percent).toFixed(2)
    }
  }

  render() {
    const {personOneAmount, personTwoAmount} = this.calculateAnswer()
    return (
      <div className="App">
        Person #1 earns: $
        <input type="number" onChange={(e) => this.setState({personOneIncome: Number(e.target.value)})} value={this.state.personOneIncome}/>
        <br/>
        Person #2 earns: $
        <input type="number" onChange={(e) => this.setState({personTwoIncome: Number(e.target.value)})} value={this.state.personTwoIncome}/>
        <br/>
        Amount to split: $
        <input type="number" onChange={(e) => this.setState({inputAmount: Number(e.target.value)})} value={this.state.inputAmount}/>
        <br/>
        <h3>Person 1 pays: ${personOneAmount}</h3>
        <h3>Person 2 pays: ${personTwoAmount}</h3>
      </div>
    );
  }
}

export default App;
