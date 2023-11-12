import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { selectAnswer, setMessage, setQuiz, fetchQuiz } from '../state/action-creators'


function Quiz(props) {
  const {selectAnswer, setQuiz, setMessage, fetchQuiz} = props
  
  console.log(props)
  
  useEffect(() => {
    fetchQuiz()
  }, [])

  console.log("hello", props.quiz)
  
  const handleSelect = () => {
    // need to update className to "answer selected" on click, button text changes to SELECTED -- currently selects both answers when clicked
    selectAnswer()
    
  }

  const handleSelectToo = () => {
    // need to update className to "answer selected" on click, button text changes to SELECTED
    selectAnswer()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
  }


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..." 
        true ? (
          <>

            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`${props.ans === 1 ? 'answer selected' : 'answer'}`}>  
              
                {props.quiz.answers.answers}
                <button id='first button' onClick={handleSelect}>
                  {props.ans === 1 ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`${props.ans === 1 ? 'answer selected' : 'answer'}`}>
                An elephant
                <button id= 'second button' onClick={handleSelectToo}>
                {props.ans === 1 ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>
          
            <button id="submitAnswerBtn" onSubmit={handleSubmit}>Submit answer</button> 
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  ) //submit button not doing anything 
}

const mapStateToProps = (state) => {
  return {
    ans: state.selectedAnswer,
    quiz: state.quiz,
    mess: state.setMessage
  }
}

export default connect(mapStateToProps, {selectAnswer, setQuiz, setMessage, fetchQuiz})(Quiz)