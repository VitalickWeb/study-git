import React from "react";

export type InputMessagesType = {
    id: string
    message: string
}

type InputMessagesPropsType = {
    name: string
    input: Array<InputMessagesType>
    callBack: () => void

}

export const ButtonForInput = (props: InputMessagesPropsType) => {
    const renderMessages = props.input.map(i => {
        return (
            <div key={i.id}>
                {i.message}
            </div>
        )
    })

    const clickButtonHandler = () => {
        props.callBack()
    }

    return (
        <>
            <span><button onClick={clickButtonHandler}>{props.name}</button></span>
            {renderMessages}
        </>
    );
}