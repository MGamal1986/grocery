import React from "react";
import classes from "./Title.module.scss";

function Title(props) {
    console.log("Title.js .. render");
    return <h1 className={classes.Title}>{props.title}</h1>;
}

export default React.memo(Title);
