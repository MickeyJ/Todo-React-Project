import React from 'react'
import { footerStyle } from '../../style/styles'

export default props =>{
  return(
    <h5 style={footerStyle}>
      &copy; 2015 {props.title}
    </h5>
  )
}