import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Menu, GitHub, Info } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: "5em"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        links: {
            marginRight: 10
        },
        drawer: {
            width: 250
        }
    }),
);

export default function Navbar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        opened: false
    });
    
    const toggleDrawer = (open: boolean) => () => {
        setState({ ...state, opened: open });
    };

    return (
        <div className={classes.root}>
            <Drawer anchor='left' open={state['opened']} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)}>
                <div className={classes.drawer} role="presentation">
                    <List>
                        <ListItem button component={RouterLink} to="/about">
                            <ListItemIcon><Info /></ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/projects">
                            <ListItemIcon><GitHub /></ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Nils Hartmann
                    </Typography>
                    <Box display={{ xs: 'none', sm: 'block', md: 'block' }}>
                        <Button color="inherit" component={RouterLink} to="/about" className={classes.links}>
                            About
                        </Button>
                    </Box>
                    <Box display={{ xs: 'none', sm: 'block', md: 'block' }}>
                        <Button color="inherit" component={RouterLink} to="/projects">
                            Projects
                        </Button>
                    </Box>
                    <Box display={{ xs: 'block', sm: 'none', md: 'none' }}>
                        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <Menu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
