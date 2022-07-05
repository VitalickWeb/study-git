import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Header} from "./Site/Header";
import {Body} from './Site/Body';
import {Footer} from "./Site/Footer";
import {Students} from "./Component/Students";
import {TopCars, TopCarsType} from "./Component/TopCars";
import {Button, Money, MoneyType} from "./Component/Button";
import {FullInput, InputType} from "./Component/FullInput";
import {ButtonForInput} from "./Component/ButtonForInput";
import {Input} from "./Component/Input";


type nameBanknote = 'all' | 'Dollars' | 'RUBLES'

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
    const [messages, setMessage] = useState<Array<InputType>>([
        {id: v1(), message: 'message1'},
        {id: v1(), message: 'message2'},
        {id: v1(), message: 'message3'},
    ])
    const [title, setTitle] = useState('')

    const addMessage = (messageId: string) => {
        let newMessage = {
            id: v1(),
            message: messageId
        }
        setMessage([newMessage, ...messages])
        setTitle('')
    }

    const addMessageButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    const moneys: Array<MoneyType> = [
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLES', value: 50, number: ' v1234567890'},
    ]
    const [filter, setFilter] = useState<nameBanknote>('all')
    const showAllBanknotes = (name: nameBanknote) => {
        setFilter(name)
    }
    let filteredMoney = moneys
    if (filter === 'Dollars') {
        filteredMoney = moneys.filter(m => m.banknotes === 'Dollars')
    } else if (filter === 'RUBLES') {
        filteredMoney = moneys.filter(m => m.banknotes === 'RUBLES')
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

            <Money money={filteredMoney}/>
            <Button nameButton={'first button'} callback={()=>showAllBanknotes('all')}/>
            <Button nameButton={'second button'} callback={()=>showAllBanknotes('Dollars')}/>
            <Button nameButton={'third button'} callback={()=>showAllBanknotes('RUBLES')}/>

            {/*<FullInput*/}
            {/*    input={messages}*/}
            {/*    addMessage={addMessage}*/}
            {/*/>*/}
            <Input
                title={title}
                setTitle={setTitle}
            />
            <ButtonForInput
                name={'+'}
                input={messages}
                callBack={addMessageButtonHandler}
            />

            <h3>{num}</h3>
            <button onClick={onClickHandler}>button ++</button>
            <button onClick={onClickresetHandler}>reset</button>
        </div>
    );
}

export default App;
