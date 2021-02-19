import React from 'react';
import QuestionInput from "./QuestionInput";
import AnswerInput from "./AnswerInput";

const Question = ({ans, addAnswerHandle, mode ,removeAnswerHandle}) => {

    return (
        <div style={{"marginTop": "30px"}}>
            <QuestionInput mode={mode}/>
            {ans.map((ele)=>(
                <AnswerInput mode={mode} handleRemove={removeAnswerHandle} num={ele}/>
            ))}
            <i onClick={addAnswerHandle} className="material-icons green-text">add_circle_outline</i>
        </div>
    );
};

export default Question;