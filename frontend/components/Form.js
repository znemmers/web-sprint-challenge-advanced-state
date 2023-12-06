import React from 'react';
import { connect } from 'react-redux';
import { inputChange, postQuiz } from '../state/action-creators';

export function Form(props) {
  const { inputChange, postQuiz, form } = props;
  
  const onChange = (e) => {
    const { id, value } = e.target;
    inputChange({ id, value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer);
  };

  const isSubmitDisabled = Object.values(form).some((value) => value.trim().length < 2);

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={isSubmitDisabled}>
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, { inputChange, postQuiz })(Form);
