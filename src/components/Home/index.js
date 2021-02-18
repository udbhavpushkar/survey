import React from 'react';
import './style.css'
import {Link} from "react-router-dom";
import {Container} from "react-materialize";
const Home = () => {
    return (
        <Container>
            <div className="m-10">
                <Link to="/create" className="btn btn-block btn-large orange darken-4">Create Survey</Link>
            </div>
            <div className="m-10">
                <Link to="/take" className="btn btn-block btn-large orange darken-4">Take Survey</Link>
            </div>
        </Container>
    );
};

export default Home;