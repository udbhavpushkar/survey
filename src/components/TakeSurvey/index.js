import React, {useContext, useEffect} from 'react';
import QuestionContext from "../../Context/questions-context";
import Question from "./Question";
import {Button, Container, Toast} from "react-bootstrap";
import Materialize from "materialize-css";

const TakeSurvey = () => {
    useEffect(()=>{
        Materialize.AutoInit()
    })

    const questions = useContext(QuestionContext);
    return (
        <Container>
            {questions.map((data, index)=>(
                <Question num={index} key={index} question={data}/>
            ))}
            {questions.length>0?
                <Button onClick={()=>Materialize.toast({html: 'Submitted Successfully'})}>Submit</Button>
            :null}
        </Container>
    );
};

export default TakeSurvey;