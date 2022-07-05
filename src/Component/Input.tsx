import React, {ChangeEvent, useState} from "react";

export type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <>
            <input
                value={props.title}
                onChange={changeInputHandler}
            />
        </>
    );
}