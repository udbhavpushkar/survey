import React, {useState} from 'react';
import Checkbox from "react-materialize/lib/Checkbox";
import {Col, Row} from "react-bootstrap";
import RadioGroup from "react-materialize/lib/RadioGroup";

const Question = ({question, num}) => {
    let options;
    const [val, setVal] = useState(null);

    if(question.type==="multi"){
        options = (
            question.options.map(opt=>(
                <div style={{"textAlign": "initial"}}>
                    <Checkbox
                        id={opt.id}
                        key={opt.id}
                        label={opt.value}
                        value={opt.value}
                    />
                </div>
            ))
        )
    }else{
        let rad = question.options.map(data=>(
            {label: data.value, value: data.value}
        ))
        options = (
            <RadioGroup
                label="options"
                name="options"
                onChange={(e)=>{setVal(e.target.value)}}
                options={rad}
                value={val}
                withGap
            />
        )
    }
    return (
        <Row>
            <Col style={{"width": "100%"}} s={12}>
                <h5 style={{"textAlign": "initial", "padding": "5px"}}>{num+1}. {question.question}</h5>
            </Col>
            <Col s={12}>
                {options}
            </Col>
        </Row>
    );
};

export default Question;