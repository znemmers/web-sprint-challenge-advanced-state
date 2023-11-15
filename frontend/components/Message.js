import React from 'react'
import { setMessage } from '../state/action-creators'
import { connect } from 'react-redux'

function Message(props) {
const {setMessage} = props
console.log(props)
  return <div id="message">{props.mess.message}</div>
}

const mapStateToProps = (state) => {
  return ({
    mess: state.infoMessage
  })
}

export default connect(mapStateToProps, {setMessage})(Message)