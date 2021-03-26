import React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "@material-ui/core/styles"
import { createMuiTheme, CssBaseline } from "@material-ui/core"
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import { HashRouter, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        type: "light"
    }
});

function App() {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    );
}

export default hot(module)(App);