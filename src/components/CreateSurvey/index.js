import React, {useContext, useEffect, useState} from 'react';
import Materialize from "materialize-css"
import TypeSelector from "./TypeSelector";
import QuestionInput from "./QuestionInput";
import AnswerInput from "./AnswerInput";
import QuestionContext from "../../Context/questions-context";

const CreateSurvey = ({mode}) => {
    const getRandom = ()=> Math.floor(Math.random()*1000)+1
    const [questionType, setQuestionType] = useState("")
    const [questionText, setQuestionText] = useState("");
    const [options, setOptions] = useState([{id: getRandom(), value: ''}])
    const questions = useContext(QuestionContext);

    const selectHandler = (e)=>{
        setQuestionType(e.target.value)
    }
    const addOptionHandler = ()=>{
        let newOptions = [...options]
        newOptions.push({id: getRandom(), value: ''})
        setOptions(newOptions)
    }
    const inputQuestionHandler = (e)=>{
        setQuestionText(e.target.value)
    }
    const deleteOptionHandler = (key)=>{
        let newOptions = options.filter(item=>(item.id!==key))
        setOptions(newOptions);
        console.log(key)
    }
    const changeOptionHandler = (e, key)=>{
        const optIndex = options.findIndex(opt=>opt.id===key)
        const opt = {...options[optIndex]}
        opt.value = e.target.value;
        const newOptions = [...options]
        newOptions[optIndex] = opt
        setOptions(newOptions)
    }

    const handlePublish = ()=>{
        const ques = {question : questionText, type: questionType ,options : options}
        questions.push(ques)
        setQuestionText("")
        setOptions([{id: getRandom(), value: ''}])
    }

    let style
    if (mode==="night"){
        style = {
            "fontSize": "1.5rem",
            "color": "grey",
            "backgroundColor": "transparent"
        }
    }
    else{
        style = {"fontSize": "1.5rem"}
    }
    useEffect(()=>{
        Materialize.AutoInit()
    })

    return (
        <>
            <TypeSelector style={style} handleSelect={selectHandler}/>
            {questionType!==""?
                <>
                    <QuestionInput inputHandler={inputQuestionHandler} val={questionText} mode={mode} />
                    {options.map(opt=>(
                        <AnswerInput deleteOpt={()=>deleteOptionHandler(opt.id)} changeHandler={(evt)=>changeOptionHandler(evt, opt.id)} key={opt.id} mode={mode} />
                    ))}

                    {(questionType === "multi" && options.length < 4) || (questionType === "single" && options.length < 2)?
                    <i onClick={addOptionHandler} className="material-icons green-text">add_circle_outline</i>:null}
                </>
                :null}
            {(questionType==="multi" && options.length===4) || (questionType==="single" && options.length>1) ?
                <button
                onClick={handlePublish}
                className="btn">Add Question</button>:null
            }
        </>
    );
};

export default CreateSurvey;