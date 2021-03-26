import React, { useEffect } from "react";
import { useState } from 'react';
import { Box, Card, CardContent, CardActions, Typography, Button, Grid, makeStyles,  } from "@material-ui/core";
import Project from './Project'
import axios from 'axios';
import { classicNameResolver } from "typescript";

const useStyles = makeStyles({
    root: {
        minHeight: 100,
    },
})

export default function Projects() {
    const classes = useStyles();
    const [ projects, setProjects] = useState([
        { id: 1, name: "Hallo", description: "Test", html_url: "www.google.de" },
        { id: 2, name: "Hallo", description: "Test", html_url: "www.google.de" }
    ]);
    const projectsHtml = [];
    for(const test of projects) {
        console.log(test)
        projectsHtml.push(
            <Grid md={3} xs={12} className={classes.root} key={test.id} item>
                <Project link={test.html_url} title={test.name} text={test.description}/>    
            </Grid>
        );
    }

    useEffect(() => {
        axios.get("https://api.github.com/users/2000Slash/repos").then((response) => {
            setProjects(response.data);
        })
    }, [])

    return(
        <Box mx="auto" maxWidth="90%" mt={15}>
            <Grid justify="center" direction="row" container spacing={5}>
                {projectsHtml}
            </Grid>
        </Box>
    )
}