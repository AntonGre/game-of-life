import { makeStyles, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
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

export interface ITopMenuProps {
    isStopped: boolean;
    setInterval: (interval: number) => void;
    toggleStopped: () => void;
}

export function TopMenu(props: ITopMenuProps) {
    const classes = useStyles();

    return (
        <AppBar position="sticky" >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <IconButton edge="start" color="inherit" className={classes.menuButton} onClick={props.toggleStopped} >
                    {props.isStopped ?  <PlayArrow/> :  <Stop/> }
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Conway's Game of Life
                </Typography>
            </Toolbar>
        </AppBar>);
}

