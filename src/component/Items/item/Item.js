import React from "react";
import classes from "./Item.module.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function Item({ title, ed, del, item }) {
    console.log("item.js .. render");
    let attchedCLass = [classes.Item, item.edit ? classes.Selected : null].join(" ");
    return (
        <li className={attchedCLass}>
            {title}
            <div className={classes.Icon}>
                <span onClick={ed}>
                    <FaEdit />
                </span>
                <span onClick={del}>
                    <FaTrashAlt />
                </span>
            </div>
        </li>
    );
}

export default React.memo(Item);
