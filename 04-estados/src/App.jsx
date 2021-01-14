import React, { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { othernumber :5  };
  // }

  state = {number:this.props.number}

  handleClick=()=>{
    this.setState({
      number:this.state.number+1
    })
  }

  handleClickdeIn=()=>{
    this.setState({
      number:this.state.number-1
    })
  }

  handleClickReset=()=>{
    this.setState({
      number:0
    })
  }


  render() {
    // const {number, name} = this.props
    return (
      <>
      <h1>el numero es {this.state.number}</h1>
      <button onClick={this.handleClick}>Increment</button>
      <button onClick={this.handleClickdeIn}>Reducir</button>
      <button onClick={this.handleClickReset}>Resetear</button>
      </>
    );
  }
}


App.defaultProps = {
  number:0
}
export default App;