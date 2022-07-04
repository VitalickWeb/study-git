import React from "react";

type BodyPropsType = {
    titleBody: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <div>
            <p>{props.titleBody}</p>
        </div>
    );
}