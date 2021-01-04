import { makeStyles, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export function TopMenu(props: any) {
    const classes = useStyles();
    const [interval, setInterval] = useState<number>(1000);

    return (
        <AppBar position="sticky" >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" className={classes.menuButton} >
                    {interval ? <Stop /> : <PlayArrow />}
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Conway's Game of Life
                </Typography>
            </Toolbar>
        </AppBar>);
}

