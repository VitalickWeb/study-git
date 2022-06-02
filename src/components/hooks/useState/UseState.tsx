import React from "react";
import {BanknotsType, MoneyType} from "../../../App";


type UseStateType = {
    callBack: (value: BanknotsType | 'all') => void
    denomination: Array<MoneyType>
}

export const UseState = (props: UseStateType) => {

    const moneyRender = props.denomination.map((money, i) => {
        return (
            <>
                <ul key={i}>
                    <li>
                        <span>/ {money.banknots} </span>
                        <span>/ {money.value} </span>
                        <span>/ {money.number} </span>
                    </li>
                </ul>
            </>
        )
    })

    return (
        <ul>
            <li>
                <span>{moneyRender}</span>
            </li>
            <button onClick={() => props.callBack('all')}>all</button>
            <button onClick={() => props.callBack('Dollars')}>dollar</button>
            <button onClick={() => props.callBack('RUBLS')}>ruble</button>
        </ul>
    )
}