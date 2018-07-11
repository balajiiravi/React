import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import logo from './logo.svg';
import './App.css';

class App extends Component {

      constructor(props){
        super(props);
        this.state = {
            qno:0,
            answerOptions:'',
            question:'',
            counter:0
        };
        this.handleAnswer = this.handleAnswer.bind(this);
      }

      componentDidMount(){
        console.log(quizQuestions[0]);
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: quizQuestions[0].answers
        });
      }

      handleAnswer(event) {
        this.validateAnswer(event.currentTarget.value);

        if (this.state.qno < quizQuestions.length) {
            this.setNextQuestion();
        } else {
            this.getResults();
        }
      }

      validateAnswer(answer) {
        if (answer.validity === true)
        {
            console.log("Valid Answer");
        }
        else
        {
            console.log("In valid Answer");
        }

        this.setState({
            answer: answer
        });
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
        console.log("Results")
      }

      renderQuiz(){
       return (
        <Quiz
            qno={this.state.qno}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            answerOptions={this.state.answerOptions}
            onAnswerSelected={this.handleAnswerSelected}
        />)
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
