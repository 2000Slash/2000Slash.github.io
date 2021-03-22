import React from "react";
import { hot } from "react-hot-loader";
import { Button } from "@material-ui/core"

function App() {
    return(
        <div>
            <Button variant="contained" color="primary"> Hello World </Button>
        </div>
    );
}

export default hot(module)(App);