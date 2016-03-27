import React from 'react'
import Clock from '../Clock/Clock'
import { headerStyle } from '../../style/styles'


export default props =>{
  return(
    <div style={headerStyle}>
      <Clock />
      <h1 style={{borderBottom: '1px solid #ccc'}}>
        {props.title}
      </h1>
    </div>
  )
}