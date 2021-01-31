import React from "react";
import classes from "./Items.module.scss";
import Item from "./item/Item";
function Items({ list, remove, edit, select }) {
    return (
        <ul className={classes.Items}>
            {list.map((ls, i) => {
                if (ls.id === select.id) {
                    const editItem = { ...ls, edit: true };
                    ls = editItem;
                }
                return (
                    <Item
                        item={ls}
                        key={ls.id}
                        title={ls.title}
                        del={() => remove(ls.id)}
                        ed={() => edit(ls.title, true)}
                    />
                );
            })}
        </ul>
    );
}

export default React.memo(Items);
