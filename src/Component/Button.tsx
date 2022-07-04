import React from "react";

type ButtonsPropsType ={
    nameButton: string
    callback: () => void
}

export const Button = (props: ButtonsPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.nameButton}</button>
        </div>
    );
}