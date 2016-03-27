import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../util/Actions'

import Header from './Header/Header'
import Todos from './Todos/Todos'
import Footer from './Footer/Footer'

class Layout extends Component{
  render(){
    return(
      <div>
        <Header  />
        <Todos />
        <Footer  />
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)