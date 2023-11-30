// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_SELECTED_ANSWER, SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case(MOVE_CLOCKWISE):
      if(state < 5){
        return state + 1
      }else return 0 
    case(MOVE_COUNTERCLOCKWISE):
        if(state > 0){
          return state - 1
        }else return 5 
    default: 
      return state
  }
}

const initialQuizState = {quiz_id: '', question: '', answers: []}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case(SET_QUIZ_INTO_STATE):
    return ({
      ...state,
      quiz_id: action.payload.quiz_id,
      question: action.payload.question,
      answers: action.payload.answers
    })
    
    default:
      return state
  }
}

const initialSelectedAnswerState = {activeButton: null}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case(SET_SELECTED_ANSWER):
      return ({
        ...state,
        activeButton: action.payload
      })
  default:
    return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case(SET_INFO_MESSAGE):
    return({
      ...state,
      message: action.payload.message
    })
  default:
    return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case(INPUT_CHANGE):
    return({
      newQuestion: '',
      newTrueAnswer: '',
      newFalseAnswer: ''
    })
    case(RESET_FORM):
    return initialFormState
    default:
      return state
  }
  }

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
