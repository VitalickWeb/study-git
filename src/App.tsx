import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Header} from "./Site/Header";
import { Body } from './Site/Body';
import {Footer} from "./Site/Footer";
import {Students} from "./Component/Students";
import {TopCars, TopCarsType} from "./Component/TopCars";
import {Button} from "./Component/Button";


const App = () => {
    //Данные храним в App
    const students = [
        {id: v1(), name: 'Vit', age: 41, active: true},
        {id: v1(), name: 'Dimych', age: 32, active: false},
        {id: v1(), name: 'Dima', age: 38, active: true},
        {id: v1(), name: 'Olga', age: 45, active: true},
        {id: v1(), name: 'Katy', age: 30, active: false},
    ]
    //Данные храним в App
    const topCars: Array<TopCarsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    //input and button
    const message = [
        {id: v1(), message: 'message1'},
        {id: v1(), message: 'message2'},
        {id: v1(), message: 'message3'},
    ]

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLES', value: 50, number: ' v1234567890'},
    ])

    const showAllBanknotes = () => {
        console.log('All Banknotes')
    }
    const showOnlyDollars = () => {
        console.log('only dollars')
    }
    const showOnlyRubles = () => {
        console.log('only rubles')
    }

    let [num, setNum] = useState(1)

    const onClickHandler = () => {
        setNum(++num)
        console.log(num)
    }
    const onClickresetHandler = () => {
        setNum(0)
    }

    return (
        <div className="App">
            <Header titleHeader={'This is a header'}/>
            <Body titleBody={'This is a Body'}/>
            <Footer titleFooter={'This is a Footer'}/>
            <Students students={students}/>
            <TopCars cars={topCars}/>
            <Button
                nameButton={'first button'}
                callback={showAllBanknotes}
            />
            <Button
                nameButton={'second button'}
                callback={showOnlyDollars}
            />
            <Button
                nameButton={'third button'}
                callback={showOnlyRubles}
            />
            <h3>{num}</h3>
            <button onClick={onClickHandler}>button ++</button>
            <button onClick={onClickresetHandler}>reset</button>
        </div>
    );
}

export default App;
