import React, {ChangeEvent, useState} from "react";

export type InputType = {
    id: string
    message: string
}

type InputPropsType = {
    input: Array<InputType>
    addMessage: (messageId: string) => void
}

export const FullInput = (props: InputPropsType) => {
    const renderMessage = props.input.map(inp => {
        return (
            <div key={inp.id}>
                {inp.message}
            </div>
        );
    })
    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickButtonHandler = (messageId: string) => {
        props.addMessage(messageId)
        setTitle('')
    }

    return (
        <div>
            <input
                value={title}
                onChange={onChangeInputHandler}
            />
            <button onClick={()=> onClickButtonHandler(title)}>+</button>
            <div>
                {renderMessage}
            </div>
        </div>
    );
}