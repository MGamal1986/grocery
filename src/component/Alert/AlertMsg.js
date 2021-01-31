import React, { useState, useRef, useEffect } from "react";
import { Alert } from "react-bootstrap";
import classes from "./AlertMsg.module.scss";
function AlertMsg({ msg, variant, items }) {
    const [alert, setAlert] = useState(false);
    // try to prevent initial firing of callback function in useEffect
    const isMounted = useRef(false);
    const timer = useRef(null);
    useEffect(() => {
        if (isMounted.current) {
            setAlert(true);
            timer.current = setTimeout(() => {
                setAlert(false);
            }, 1000);
        } else {
            isMounted.current = true;
        }
        // invoke before second render to clear any subscribtion of th previous render
        return () => {
            clearTimeout(timer.current);
        };
    }, [items]);

    return (
        <>
            {alert ? (
                <Alert className={classes.Alert} variant={variant}>
                    {msg}
                </Alert>
            ) : null}
        </>
    );
}

export default React.memo(AlertMsg);
