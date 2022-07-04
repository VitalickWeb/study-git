import React from "react";

type HeaderPropsType = {
    titleHeader: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div>
            <h3>{props.titleHeader}</h3>
        </div>
    );
}