import React from "react";
import classes from "./Title.module.scss";

function Title(props) {
    return <h1 className={classes.Title}>{props.title}</h1>;
}

export default React.memo(Title);
