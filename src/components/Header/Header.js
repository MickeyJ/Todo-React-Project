import React from 'react'
import { headerStyle } from '../../style/styles'

const Header = props =>{
  return(
    <div style={headerStyle}>
      <h1 style={{borderBottom: '1px solid #ccc'}}>
        {props.title}
      </h1>
    </div>
  )
};
export default Header