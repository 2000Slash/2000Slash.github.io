import React from "react";
import { hot } from "react-hot-loader";
import { Button } from "@material-ui/core"
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
    return(
        <HashRouter>
            <div>
                <Navbar />
                <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default hot(module)(App);