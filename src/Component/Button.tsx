import React from "react";

type ButtonsPropsType ={
    nameButton: string
    callback: () => void
}

export type MoneyType = {
    banknotes: string
    value: number
    number: string
}

type MoneyPropsType = {
    money: Array<MoneyType>

}

export const Money = (props: MoneyPropsType) => {
    const renderMoney = props.money.map((m, idx) => {
        return (
            <li key={idx}>
                {m.banknotes} {m.value} {m.number}
            </li>
        );
    })

    return (
        <>
            <ul>
                {renderMoney}
            </ul>
        </>
    )
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