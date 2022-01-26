
import React, {Component} from 'react'
import {Icon, Button } from 'semantic-ui-react'
import './Item.css'

class App extends Component {
  stock = 5;
  state = {counter: 0};
  disminuir = (e) => {
    if (this.state.counter >0){
      this.setState ({counter: this.state.counter - 1})
    }
  }

  aumentar = (e) => {
    if (this.state.counter < this.stock){
      this.setState ({counter: this.state.counter + 1})
    }
  }


  render() {
    return (
      <div className='Cont'>
        <Button onClick={this.disminuir} basic color='green'><Icon name= "minus"/></Button>
        <Button onClick={this.aumentar} basic color='red'><Icon name= "plus"/></Button> 
        <h4>Cantidad:{this.state.counter}</h4> 
      </div>
    );
  }

}

export default App;
