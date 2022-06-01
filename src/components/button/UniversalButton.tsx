import React from 'react'

type ButtonPropsType = {
    name: string
    callBack: () => void// колбэк функция!!!
}

export const UniversalButton = (props: ButtonPropsType) => {
    //универсальная компонента, возможно добавления каких то свойств, например цвет кнопки
    const onClickHandler = () => {
        props.callBack()//вызываем колбэк функцию!!!
    }
    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    );
}