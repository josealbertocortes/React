import React, { Component } from 'react';

class App extends Component {
  constructor (props){
    super(props)
  
  }


  handleClick = (e) =>{
    console.log(e.target)
  }
  // handleClick =(msg,e) => {
  //   console.log(msg)
  //   console.log(e.target)
  // }
  
  render() {
    return (
      <div>
        <h1>eventos</h1>
        {/* <button onClick={this.handleClick}>Click me</button> */}
        {/* <Buttons text="Click me" /> */}
        {/* <Buttons text="Click me" oneventclick={this.handleClick}/> */}
        {/* <button onClick={this.handleClick}>Click me</button> */}
        {/* <button onClick={this.handleClick.bind(this,"heloo")} >Click me</button> */}
        {/* <button onClick={(e)=>this.handleClick(e,"heloo")} >Click me</button> */}
        {/* <button onClick={()=>this.handleClick()} >Click me</button> */}
        {/* <button onClick={this.handleClick.bind(this)} >Click me</button> */}
        {/* <button onClick={this.handleClick} >Click me</button> */}

      </div>
    );
  }
}

export default App;

