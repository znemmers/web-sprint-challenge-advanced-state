import React, {useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const {inputChange, postQuiz} = props

  const [formData, setFormData] = useState({
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: '',
  });

  const onChange = (e) => {
    const { id, value } = e.target;
    inputChange(value);
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postQuiz(newQuestion.value, newTrueAnswer.value, newFalseAnswer.value)

  }

  const isSubmitDisabled = Object.values(formData).some((value) => value.trim() === '');

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={isSubmitDisabled}>Submit new quiz</button>
    </form>
  )
}

 
export default connect(st => st, actionCreators)(Form)
