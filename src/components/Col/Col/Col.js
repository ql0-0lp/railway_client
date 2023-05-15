import React from "react";
import cn from "classnames";
import s from "./Col.module.css";

const Col = ({className="", children, colWidth, tag = "div"}) => {

    const Wrapper = tag;

    return (
        <Wrapper className={cn(className, { [s[`${colWidth}`]]: colWidth })}>
            {children}
        </Wrapper>
    );
}

export default Col;