import logo from '../../logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState} from "react";
import CreateSurvey from "../CreateSurvey";
import TakeSurvey from "../TakeSurvey";
import Home from "../Home";
import tiger from '../../tiger2.svg'
import darkBg from "../../bg.jpg"
import lightBg from "../../bg1.jpg"
import {Card, Container, Icon} from "react-materialize";

function App() {

    const [mode, setMode] = useState("day")
    const [questions, setQuestions] = useState("")

    const handleMode = ()=>{
        if (mode==="day"){
            setMode("night")
            document.body.style.backgroundImage = `url(${darkBg})`
        }else{
            setMode("day")
            document.body.style.backgroundImage = `url(${lightBg})`
        }
    }

  return (
      <div className="App">
          <Router>
              <Container>
                  <Container>
                      <div className="center">
                        <Card className={mode==="night"?"black white-text":""}>
                            {mode==="day"?<div
                                className="right white black-text"
                                onClick={handleMode}
                                style={{"cursor": "pointer"}}>
                                <Icon>mode_night</Icon>
                            </div>:<div
                                className="right black white-text"
                                onClick={handleMode}
                                style={{"cursor": "pointer"}}>
                                <Icon>light_mode</Icon>
                            </div>}
                            <img className="m-10 responsive-img" src={tiger} alt="Logo"/>
                              <Switch>
                                  <Route path="/" exact>
                                      <Home/>
                                  </Route>
                                  <Route path="/create">
                                      <CreateSurvey mode={mode} question={questions} />
                                  </Route>
                                  <Route path="/take">
                                      <TakeSurvey />
                                  </Route>
                              </Switch>
                        </Card>
                      </div>
                </Container>
              </Container>
          </Router>
      </div>

  );
}

export default App;
