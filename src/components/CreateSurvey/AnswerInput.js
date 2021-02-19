import React, {useState} from 'react';

const AnswerInput = ({num, handleRemove})=> {

    const [val, setVal] = useState("")
    const getKey = ()=>{
        handleRemove(num)
    }

    const handleInputChange = (e)=>{
        setVal(e.target.value)
    }

    return (
        <div className="input-field">
            <i onClick={getKey} className="material-icons prefix red-text">remove_circle_outline</i>
            <input placeholder="Answer" onChange={handleInputChange} value={val} type="text"/>
        </div>
    );
};

export default AnswerInput;