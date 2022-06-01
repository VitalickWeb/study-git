import React from "react";

type HeaderType = {
    title: string
}

export const Header = (props: HeaderType) => {
    //Для того что бы передать сюда аргументы нужно в кноке расставить скобки с права и с лева

    return (
        <>
            <span>{props.title}</span>
        </>
    );
}

