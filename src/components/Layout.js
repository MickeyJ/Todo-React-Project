import React from 'react'
import Header from './Header/Header'
import Todos from './Todos/Todos'
import Footer from './Footer/Footer'

export default props =>{
  return(
    <div>
      <Header title={props.title} />
      <Todos />
      <Footer title={props.title} />
    </div>
  )
}