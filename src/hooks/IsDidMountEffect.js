import { useEffect, useRef } from "react";
function IsDidMountEffect(fun, deps) {
    const isMountend = useRef(false);
    useEffect(() => {
        if (isMountend.current) fun();
        else isMountend.current = true;
    }, [deps]);
}

export default IsDidMountEffect;
