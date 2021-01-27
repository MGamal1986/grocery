import React, { useState } from "react";
import classes from "./Form.module.scss";
import uniqid from "uniqid";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";

function FormInput({ add, editName }) {
    // console.log(editName && true);
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    // console.log(editName);
    // handle submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        let val = name ? name : value;
        let newItem = { id: uniqid(), title: val };
        add(newItem);
        setValue("");
    };
    // handle onchnage event
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleEdit = (e) => {
        setName(e.target.value);
    };

    console.log("FormInput.js .. render");
    return (
        <Form inline className={classes.Form} onSubmit={handleSubmit}>
            <InputGroup className={classes.Input}>
                <FormControl
                    id="inlineFormInputGroupUsername2"
                    placeholder="e.g. eggs"
                    onChange={editName ? handleEdit : handleChange}
                    value={editName ? name : value}
                />
            </InputGroup>
            <Button type="submit" className={classes.Button}>
                {editName ? "Edit" : "Submit"}
            </Button>
        </Form>
    );
}

export default React.memo(FormInput);
