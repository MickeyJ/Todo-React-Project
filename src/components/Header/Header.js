import React from 'react'
import { headerStyle } from '../../style/styles'

export default props =>{
  return(
    <h1 style={headerStyle}>
      {props.title}
    </h1>
  )
}