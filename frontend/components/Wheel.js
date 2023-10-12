import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'


 function Wheel(props) {
  const {moveClockwise, moveCounterClockwise} = props
  
  const handleClockwise = () => {
    moveClockwise();
  }

  const handleCounter = () => {
    moveCounterClockwise();
  }

console.log(props)
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${props.id === 0 ? 'active' : ''}`} style={{ "--i": 0 }}>{props.id === 0 ? 'B' : ''}</div>
        <div className={`cog ${props.id === 1 ? 'active' : ''}`} style={{ "--i": 1 }}>{props.id === 1 ? 'B' : ''}</div>
        <div className={`cog ${props.id === 2 ? 'active' : ''}`}style={{ "--i": 2 }}>{props.id === 2 ? 'B' : ''}</div>
        <div className={`cog ${props.id === 3 ? 'active' : ''}`}style={{ "--i": 3 }}>{props.id === 3 ? 'B' : ''}</div>
        <div className={`cog ${props.id === 4 ? 'active' : ''}`} style={{ "--i": 4 }}>{props.id === 4 ? 'B' : ''}</div>
        <div className={`cog ${props.id === 5 ? 'active' : ''}`} style={{ "--i": 5 }}>{props.id === 5 ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounter} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return({
    id: state.wheel
  })
}

export default connect(mapStateToProps,{moveClockwise, moveCounterClockwise})(Wheel)