import React from "react";

type FooterPropsType = {
    titleFooter: string
}

export const Footer = (props: FooterPropsType) => {

    return (
        <div>
            <p>{props.titleFooter}</p>
        </div>
    );
}