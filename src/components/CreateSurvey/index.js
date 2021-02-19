import React, {useEffect, useState} from 'react';
import Materialize from "materialize-css"
import {Dropdown, Select} from "react-materialize";
import {Container} from "react-bootstrap";
import Question from "./Question";
import Single from "./Single";

const CreateSurvey = ({question}) => {
    const [questionType, setQuestionType] = useState("")
    const handleSelect = (e)=>{
        setQuestionType(e.target.value)
    }
    const [ans, setAns] = useState([1])
    const addAnswerHandle = ()=>{
        setAns([...ans, ans[ans.length-1]+1])
    }
    const removeAnswerHandle = (k)=>{
        if (ans.length>1){
            for(let i = 0; i < ans.length; i++){
                if ( ans[i] === k) {
                    ans.splice(i, 1);
                    console.log("yes"+i)
                }
            }
            console.log(ans)
            setAns([...ans])
        }
    }

    const handlePublish = ()=>{
        console.log("published")
    }

    useEffect(()=>{
        Materialize.AutoInit()
    })
    return (
        <>
            <Container>
                <select onChange={handleSelect} id="option">
                    <option selected disabled>Select Question type</option>
                    <option value="multi">Multi-select</option>
                    <option value="single">Single select</option>
                </select>
            </Container>
            {questionType!==""?<Question
                addAnswerHandle={addAnswerHandle}
                removeAnswerHandle={removeAnswerHandle}
                ans={ans}
            />:""}
            {(questionType==="multi" && ans.length>=4) || (questionType==="single" && ans.length>1) ? <button
                onClick={handlePublish}
                className="btn">Publish</button>:""}
        </>
    );
};

export default CreateSurvey;