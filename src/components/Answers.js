
import React from 'react';

class Answer extends React.Component {

    render() {
        return (
            <input
                type = "radio"
                id = {this.props.value}
                value = {this.props.value}
                onChange = {this.props.handleAnswer}
                />
        );
    }
}

export default Answer;