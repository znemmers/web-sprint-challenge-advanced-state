import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { selectAnswer, setMessage, setQuiz, fetchQuiz, postQuiz } from '../state/action-creators'


function Quiz(props) {
  const {selectAnswer, setMessage, fetchQuiz} = props
  const [isDisabled, setDisabled] = useState(true)
  useEffect(() => {
    fetchQuiz()
  }, [])
  
  const handleButtonClick = (buttonId) => {
    selectAnswer(buttonId)
    setDisabled(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postQuiz()
    setDisabled(true)
  }


  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..." 
        
        true ? (
          <>

            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers"> 
              <div className={props.ans.activeButton === 'button1' ? 'answer selected' : 'answer'}>  
                  {props.quiz.answers.length ? props.quiz.answers[0].text : ''}
                <button onClick={() => handleButtonClick('button1')}>
                  {props.ans.activeButton === 'button1' ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={props.ans.activeButton === 'button2' ? 'answer selected' : 'answer'}>
                 {props.quiz.answers.length ? props.quiz.answers[1].text : ''}
                <button onClick={() => handleButtonClick('button2')}>
                  {props.ans.activeButton=== 'button2' ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>
          
            <button id="submitAnswerBtn" onSubmit={handleSubmit} disabled={isDisabled}>Submit answer</button> 
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  ) 
}

const mapStateToProps = (state) => {
  return {
    ans: state.selectedAnswer,
    quiz: state.quiz,
    mess: state.setMessage
  }
}

export default connect(mapStateToProps, {selectAnswer, setQuiz, setMessage, fetchQuiz})(Quiz)