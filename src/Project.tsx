import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, makeStyles, Link } from '@material-ui/core'

type ProjectProps = {
    title: string,
    text: string,
    link: string,
    language: string
}

const useStyles = makeStyles({
    description: {
        marginTop: 10,
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
});

export default function meem(props: ProjectProps) {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{props.language}</Typography>
                <Typography className={classes.description}>{props.text}</Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} size="small" color="primary" href={props.link}>Learn more</Button>
            </CardActions>
        </Card>
    )
}