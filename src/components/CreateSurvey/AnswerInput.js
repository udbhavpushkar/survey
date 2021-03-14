import React, {useState} from 'react';

const AnswerInput = ({mode, deleteOpt, changeHandler})=> {
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
            <i onClick={deleteOpt} className="material-icons prefix red-text">remove_circle_outline</i>
            <input placeholder="Answer" onChange={changeHandler} style={style} type="text"/>
        </div>
    );
};

export default AnswerInput;