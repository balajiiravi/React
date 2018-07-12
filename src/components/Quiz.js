import React from 'react';
import Question from './Question';
import Answer from './Answers';
import QuestionCount from './QuestionCount';

class Quiz extends React.Component {

      renderAnswer = (key) => {
        let answers = [];
          return (
            <Answer
            id = {key.value}
            value = {key.value}
            onAnswerSelected = {this.props.onAnswerSelected}
            />
          );
      }

    render() {
        let answers;
        if(this.props.answerOptions) {
            answers = this.props.answerOptions.map((answer, i) => {
                    return this.renderAnswer(answer)
                    })
        }
        return(
            <div key={this.props.qno}>
                <QuestionCount
			 		counter={this.props.qno}
			 		total={this.props.questionTotal}
			  	/>
                <Question question={this.props.question}/>
                <ul>
                {answers}
                </ul>
            </div>
        );
   }
}

export default Quiz;