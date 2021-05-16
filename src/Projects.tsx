import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Grid, makeStyles,  } from "@material-ui/core";
import Project from './Project'
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        minHeight: 100,
    },
})

export default function Projects() {
    const classes = useStyles();
    const [ projects, setProjects] = useState([
        { id: -1, name: "Loading", description: "Loading", html_url: "Loading", language: "Loading" }
    ]);
    const projectsHtml = [];

    if (projects[0].id == -1) {
         projectsHtml.push(
             <CircularProgress key="progress"/>
         )
    }
    
    for(const test of projects) {
        projectsHtml.push(
            <Grid md={3} xs={12} className={classes.root} key={test.id} item>
                <Project language={test.language} link={test.html_url} title={test.name} text={test.description}/>    
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
