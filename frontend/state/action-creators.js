import axios from "axios"
import { MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE, 
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER, 
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM } from "./action-types"


// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { 
  return {type: MOVE_CLOCKWISE} 
}

export function moveCounterClockwise() { 
  return {type: MOVE_COUNTERCLOCKWISE}
}

export function selectAnswer(buttonId) { 
  return {type: SET_SELECTED_ANSWER, payload: buttonId}
}

export function setMessage(message) { 
  return {type: SET_INFO_MESSAGE, payload: message}
}

export function setQuiz(quizInfo) {
  return {type: SET_QUIZ_INTO_STATE, payload: quizInfo }
 }

export function inputChange({id, value}) { 
  return {type: INPUT_CHANGE, payload: {id, value}}
}

export function resetForm() {
  return {type: RESET_FORM}
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET: 
    // - Dispatch an action to send the obtained quiz to its state
    // http://localhost:9000/api/quiz/next
   axios.get(`http://localhost:9000/api/quiz/next`)
   .then(res => {
    dispatch(setQuiz(res.data))
   })
   .catch(err => console.log(err))
  }
}
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    // http://localhost:9000/api/quiz/answer
    axios.post('http://localhost:9000/api/quiz/answer', {
      quiz_id: quiz_id,
      answer_id: answer_id
    })
    .then(res => {
      dispatch(setMessage(res.data))
      dispatch(fetchQuiz())
    })
    .catch(err => console.log(err))
    
  }
}
export function postQuiz(question_text, true_answer_text, false_answer_text) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    // http://localhost:9000/api/quiz/new 
    axios.post('http://localhost:9000/api/quiz/new', {
      question_text: newQuestion.value,
      true_answer_text: newTrueAnswer.value,
      false_answer_text: newFalseAnswer.value
    })
    .then(res => {
      console.log(res.data.question)
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm())
    })
    .catch(err => console.log(err)) 
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
