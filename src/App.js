import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Results from './components/Results';
import logo from './logo.svg';
import './App.css';

class App extends Component {

      constructor(props){
        super(props);
        this.state = {
            qno:1,
            answerOptions:'',
            question:'',
            counter:0,
        };
        this.handleAnswer = this.handleAnswer.bind(this);
      }

      componentDidMount(){
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers
        });
      }

      handleAnswer(event) {
        let validity = this.validateAnswer(event.currentTarget.value);
        if (validity === true)
        {
            if (this.state.qno < quizQuestions.length) {
             this.setNextQuestion()
             } else {
              this.getResults()
             }
            console.log("True");
        }
        else
        {
            console.log("False");
        }

      }

      validateAnswer(answer) {
        let answerOptns = quizQuestions[this.state.counter].answers;

        for (let item of answerOptns)
         {
            if (item.value === answer)
            {
                return item.valid;
            }
         }
      }

      setNextQuestion() {
        const counter = this.state.counter + 1;
        const qno = this.state.qno + 1;

        this.setState({
            counter: counter,
            qno: qno,
            question: quizQuestions[counter].question,
            answer: ''
        });
      }

      getResults() {
        return(
            <Results />
            );
      }

      renderQuiz(){
       return (
        <Quiz
            qno={this.state.qno}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            answerOptions={this.state.answerOptions}
            onAnswerSelected={this.handleAnswer}
        />);
      }

      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Survey</h1>
            </header>
             {this.renderQuiz()}
             </div>
        );
      }
    }

export default App;
