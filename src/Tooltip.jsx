import React from "react";

const Tooltip = (props) =>
{
    return (
        <div className={`tooltip ${props.position === "right" ? "tooltip-right" : props.position === "top" ? "tooltip-top" : props.position === "bottom" ? "tooltip-bottom" : "tooltip-left"}`}>
            <p>Thanks for hovering! I'm a tooltip</p>
        </div>
    )
}

export default Tooltip