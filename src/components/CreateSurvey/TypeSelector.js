import React from 'react';
import {Container} from "react-bootstrap";

const TypeSelector = ({handleSelect, style}) => {
    return (
        <>
            <Container className="m-5">
                <select className="browser-default" style={style} onChange={handleSelect} id="option">
                    <option value="">Select Question type</option>
                    <option value="multi">Multi-select</option>
                    <option value="single">Single select</option>
                </select>
            </Container>
        </>
    );
};

export default TypeSelector;