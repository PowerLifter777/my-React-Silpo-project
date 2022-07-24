import React from "react";

import logo_icon from '../../images/Silpo_logo.svg'
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loader_container}>
            <img alt='Logo' src={logo_icon} ></img>
            <div className={classes.loader}>
                <div id={classes.el1}></div>
                <div id={classes.el2}></div>
                <div id={classes.el3}></div>
                <div id={classes.el4}></div>
                <div id={classes.el5}></div>
            </div>
        </div>
    )
}

export default Loader;