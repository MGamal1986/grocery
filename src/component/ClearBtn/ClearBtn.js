import React from "react";
import classes from "./ClearBtn.module.scss";
function ClearBtn(props) {
    return (
        <span onClick={props.clicked} className={classes.Button}>
            clear items
        </span>
    );
}

export default ClearBtn;
