import React from 'react';

const QuestionInput = ({mode, inputHandler, val}) => {
    let style
    if (mode==="night"){
        style = {
            "color": "white"
        }
    }else {
        style = {}
    }

    return (
        <div className="input-field">
            <i className="material-icons prefix">quiz</i>
            <input id="icon_prefix" onChange={inputHandler} value={val} style={style} type="text"/>
            <label htmlFor="icon_prefix">Enter your question here</label>
        </div>
    );
};

export default QuestionInput;