import React from "react";

type TitlePropsType = {
    title: string
}

export const Header = (props: TitlePropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
}