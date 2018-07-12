
import React from 'react';

class Answer extends React.Component {

    render() {
        return (
            <li>
            <input
                className = "radioPad"
                type = "radio"
                className="radioCustomButton"
                name = "radiogroup"
                id = {this.props.value}
                value = {this.props.value}
                onChange = {this.props.onAnswerSelected}
                />
            <label className="answerOptions">{this.props.value}</label>
            </li>
        );
    }
}

export default Answer;