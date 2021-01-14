import React, { Component } from 'react';

import Headers from './componentes/Headers'

class App extends Component {

  constructor(props){
      super(props)
      this.state = {number:0}
      console.log("contructros")
  }

  componentDidMount(){
    //peticiones htpp
    fetch( )
    // asignaciones de eventos
    // actualicaciondel estado
  }

  render(){
    // no se puede hacer 
    // this.setState({number:23})
    if(true){
    return (
      <>
      <Headers title="lifecicle"/>
      <h2>lifecycle</h2>
      </>
    );
  }
  // disponible desde la version 16
  else return null
  }
}

export default App