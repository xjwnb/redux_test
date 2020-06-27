import React, { Component } from 'react';

// import store from '../../store'
import { connect } from 'react-redux'

import { increCount, decreCount } from '../../store/action/actions/count'

import { Button } from 'antd';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // count: store.getState().count.count
    }
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }


  render() { 
/*     store.subscribe(() => {
      this.setState({
        count: store.getState().count.count
      })
    }) */

    console.log(this.props)

/*     console.log(store)
    console.log(store.getState())
    console.log(store.getState().count) */
    return ( 
      <div>
        count: {this.props.count.count} {/* {this.state.count} */}
        <Button onClick={this.incrementCount}>Redux + 1</Button>
        <Button onClick={this.decrementCount}>Redux - 1</Button>
      </div>
    );
  }

  incrementCount() {
    // store.dispatch(increCount())
    this.props.increCount()
  }

  decrementCount() {
    // store.dispatch(decreCount())
    this.props.decreCount()
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increCount: _ => dispatch(increCount()),
    decreCount: _ => dispatch(decreCount())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Count);