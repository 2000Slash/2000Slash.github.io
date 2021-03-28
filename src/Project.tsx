import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Card, CardContent, Typography, CardActions, Button, makeStyles, Link } from '@material-ui/core'

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
    dialogText: {
        wordBreak: "break-word"
    },
    dialogMarkdown: {
        maxWidth: "75%"
    }
});

export default function meem(props: ProjectProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [readme, setReadme] = React.useState("Sorry this repository does not have a readme.");
    const handleClick = () => {
        axios.get(`https://api.github.com/repos/2000Slash/${props.title}/readme`, 
            {
                headers: { 
                    'Accept': 'application/vnd.github.VERSION.raw'
                },
                data: {}
            }).then((response) => {
                setReadme(response.data);
            });
        setOpen(!open);
    };

    return(
        <Card className={classes.card}>
            <Dialog open={open}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography className={classes.dialogText}><ReactMarkdown>{readme}</ReactMarkdown></Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button component={Link} href={props.link} size="small" color="primary">Visit</Button>
                    <Button onClick={handleClick} size="small" color="primary">Close</Button>
                </DialogActions>
            </Dialog>
            <CardContent>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{props.language}</Typography>
                <Typography className={classes.description}>{props.text}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleClick} size="small" color="default">Learn more</Button>
            </CardActions>
        </Card>
    )
}