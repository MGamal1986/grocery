import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import uniqid from "uniqid";
import classes from "./Grocery.module.scss";
import Title from "../../component/Title/Title";
import AlertMsg from "../../component/Alert/AlertMsg";
import Items from "../../component/Items/Items";
import ClearBtn from "../../component/ClearBtn/ClearBtn";

// get list from local storage firstly, we put this function outside the component
// as we alreay have state to store list we just check if we have list in localstorage
const getLocalStorageList = () => {
    let data = localStorage.getItem("list");
    // console.log(data);
    if (data) {
        return JSON.parse(localStorage.getItem("list"));
    } else {
        return [];
    }
};

function Grocery(props) {
    // create ref
    const inputRef = useRef();

    // define app states
    //state for all lists include alert message and alert enable falg
    const [list, setList] = useState({
        items: getLocalStorageList(),
        alertMsg: "",
        variant: "",
    });

    // form state
    const [value, setValue] = useState("");

    // edit enable/disable state
    const [edit, setEdit] = useState(false);

    // state to store edit item
    const [editItem, setEditItem] = useState("");

    // at any update we modify localStorage with new list
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list.items));
    }, [list.items]);

    // add new item to list  or edit item
    const addList = (item, editable = false) => {
        // add new item in the list
        if (item !== "" && editable === false && edit === false) {
            let newItem = { id: uniqid(), title: value };
            let newList = [newItem, ...list.items];
            setList({ items: newList, alertMsg: "item is added", variant: "success" });
            setValue("");
            // add empty item
        } else if (item === "") {
            setList({
                items: [...list.items],
                alertMsg: "please enter the value",
                variant: "danger",
            });
            // check if this calling is editing or not
        } else if (edit === false && editable === true) {
            setEdit(true);
            // catch item that we want to edit
            setEditItem(item);
            // add item value to input
            setValue(item);
            // mark edit item
        } else if (edit) {
            let editList = [...list.items];
            // editList = 0;
            editList.map((ls) => {
                if (ls.title === editItem) {
                    ls.title = value;
                }
                return ls;
            });
            setEditItem("");
            setEdit(false);
            setList({
                items: editList,
                alertMsg: "item is changed",
                variant: "success",
            });
            setValue("");
        }
        // after we finish add new item or edit old item we retun focus to the input
        inputRef.current.focus();
    };

    // remove single item
    const removeList = (id) => {
        let newList = [...list.items].filter((ls) => ls.id !== id);
        setList({ items: newList, alertMsg: "item is deleted", variant: "danger" });
    };

    // remove all items
    const removeAllItems = () => {
        setList({ items: [], alertMsg: "all items are deleted", variant: "danger" });
    };

    // handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        addList(value);
    };

    // handle onchnage event
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className={classes.Grocery}>
                        <AlertMsg msg={list.alertMsg} variant={list.variant} items={list.items} />
                        <Title title="grocery bud" />
                        <Form inline className={classes.Form} onSubmit={handleSubmit}>
                            <InputGroup className={classes.Input}>
                                <FormControl
                                    id="inlineFormInputGroupUsername2"
                                    placeholder="e.g. eggs"
                                    onChange={handleChange}
                                    value={value}
                                    ref={inputRef}
                                />
                            </InputGroup>
                            <Button type="submit" className={classes.Button}>
                                {edit ? "Edit" : "Submit"}
                            </Button>
                        </Form>
                        <Items
                            list={list.items}
                            remove={removeList}
                            edit={addList}
                            select={editItem}
                        />
                        {list.items.length > 0 ? <ClearBtn clicked={removeAllItems} /> : null}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Grocery;
