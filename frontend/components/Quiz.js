import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { selectAnswer, setQuiz, fetchQuiz, postAnswer } from '../state/action-creators'


function Quiz(props) {
  const {selectAnswer, fetchQuiz, postAnswer} = props
  const [isDisabled, setDisabled] = useState(true)
  
  useEffect(() => {
    fetchQuiz()
  }, [])
  
  const handleButtonClick = (buttonId) => {
    selectAnswer(buttonId)
    setDisabled(false)
  }

  const handleSubmit = () => {
    const ansId = (props.ans.activeButton === 'button1' ? props.quiz.answers[0].answer_id : props.quiz.answers[1].answer_id)
   postAnswer(props.quiz.quiz_id, ansId)
  }



  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..." 
        
        props.quiz.quiz_id.length ? (
          <>

            <h2>{props.quiz.question}</h2>

            <div id={props.quiz.quiz_id}> 
              <div id={props.quiz.answers.length ? props.quiz.answers[0].answer_id : ''} className={props.ans.activeButton === 'button1' ? 'answer selected' : 'answer'}>  
                  {props.quiz.answers.length ? props.quiz.answers[0].text : ''}
                <button onClick={() => handleButtonClick('button1')}>
                  {props.ans.activeButton === 'button1' ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div id={props.quiz.answers.length ? props.quiz.answers[1].answer_id : ''} className={props.ans.activeButton === 'button2' ? 'answer selected' : 'answer'}>
                 {props.quiz.answers.length ? props.quiz.answers[1].text : ''}
                <button onClick={() => handleButtonClick('button2')}>
                  {props.ans.activeButton === 'button2' ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>
          
            <button id="submitAnswerBtn" onClick={handleSubmit} disabled={isDisabled}>Submit answer</button> 
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
  }
}

export default connect(mapStateToProps, {selectAnswer, setQuiz, fetchQuiz, postAnswer})(Quiz)