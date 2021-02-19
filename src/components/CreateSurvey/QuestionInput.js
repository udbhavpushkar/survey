import React from 'react';

const QuestionInput = () => {
    return (
        <div className="input-field">
            <i className="material-icons prefix">quiz</i>
            <input id="icon_prefix" type="text"/>
            <label htmlFor="icon_prefix">Enter your question here</label>
        </div>
    );
};

export default QuestionInput;