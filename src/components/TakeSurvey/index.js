import React, {useContext} from 'react';
import QuestionContext from "../../Context/questions-context";

const TakeSurvey = () => {
    const questions = useContext(QuestionContext);

    return (
        <div>
            This is take survey page
            {questions.map(data=>(
                <p>{data.question}</p>
            ))}
        </div>
    );
};

export default TakeSurvey;