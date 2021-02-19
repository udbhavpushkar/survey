import React, {useState} from 'react';
import QuestionInput from "./QuestionInput";
import AnswerInput from "./AnswerInput";

const Question = ({ans, addAnswerHandle, removeAnswerHandle}) => {

    return (
        <div style={{"marginTop": "30px"}}>
            <QuestionInput/>
            {ans.map((ele)=>(
                <AnswerInput handleRemove={removeAnswerHandle} num={ele}/>
            ))}
            <i onClick={addAnswerHandle} className="material-icons green-text">add_circle_outline</i>
        </div>
    );
};

export default Question;