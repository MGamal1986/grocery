import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import IsDidMountEffect from "../../hooks/IsDidMountEffect";
import classes from "./AlertMsg.module.scss";
function AlertMsg({ msg, variant, items }) {
    const [alert, setAlert] = useState(false);

    // use custom hook that prevent useEffect Initail render
    IsDidMountEffect(() => {
        setAlert(true);
        let timer = setTimeout(() => {
            setAlert(false);
        }, 800);
        return () => {
            clearTimeout(timer);
        };
    }, items);

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
