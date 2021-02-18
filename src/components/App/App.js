import logo from '../../logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import CreateSurvey from "../CreateSurvey";
import TakeSurvey from "../TakeSurvey";
import Home from "../Home";
import tiger from '../../tiger.jpg'
import {Card, Container} from "react-materialize";

function App() {
  return (
      <div className="App">
          <Router>
              <Container>
                  <Container>
                      <div className="center">
                        <Card>
                            <img className="m-10" src={tiger} alt="Logo"/>
                              <Switch>
                                  <Route path="/" exact>
                                      <Home/>
                                  </Route>
                                  <Route path="/create">
                                      <CreateSurvey />
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
