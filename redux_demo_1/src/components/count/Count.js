import React, { Component } from 'react';

import store from '../../store'

import { increCount, decreCount } from '../../store/action/actions/count'

import { Button } from 'antd';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: store.getState().count.count
    }
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  

  render() { 

    store.subscribe(() => {
      this.setState({
        count: store.getState().count.count
      })
    })

    console.log(store)
    console.log(store.getState())
    console.log(store.getState().count)
    return ( 
      <div>
        count: {this.state.count}
        <Button onClick={this.incrementCount}>Redux + 1</Button>
        <Button onClick={this.decrementCount}>Redux - 1</Button>
      </div>
    );
  }

  incrementCount() {
    store.dispatch(increCount())
  }

  decrementCount() {
    store.dispatch(decreCount())
  }
}

export default Count;