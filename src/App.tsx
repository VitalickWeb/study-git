import React, {useState} from 'react';
import './App.css';
import {Header} from './Header';
import {Body} from './Body';
import {CarsType, Footer} from './Footer';
import {UniversalButton} from "./components/button/UniversalButton";
import {UseState} from "./components/hooks/useState/UseState";

export type BanknotsType = 'Dollars' | 'RUBLS'

export type MoneyType = {
    banknots: BanknotsType
    value: number
    number: string
}

const App = () => {
    //Данные храним в App потому что нам не нужны будут 2 App
    const topCars: Array<CarsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    //Прописываем логику на кнопку в компоненте выше
    const buttonFoo1 = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const buttonFoo2 = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const buttonFoo3 = () => {
        console.log('i am stupped button');
    }

    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filteredCurrency, setFilteredCurrency] = useState<Array<MoneyType>>(money)
    debugger
    const onClickHandler = (currency: BanknotsType | 'all' = 'Dollars') => {

        if (currency === 'all') {
            setFilteredCurrency(money)
            return
        }
        const filteredCurrency =  money.filter((filteredСurrency) => filteredСurrency.banknots === currency)
        setFilteredCurrency(filteredCurrency)
    }


    return (
        <div className="App">
            <Header title={'NEW HEADER'}/>
            <Body title={'NEW BODY'}/>
            <Footer cars={topCars}/>

            <div>
                <UniversalButton
                    name={'MyYouTubeChanel-1'}
                    callBack={() => buttonFoo1('Vit here', 41)}
                />
                <UniversalButton
                    name={'MyYouTubeChanel-2'}
                    callBack={() => buttonFoo2('Liza here', 15)}
                />
                <UniversalButton
                    name={'stupped button'}
                    callBack={buttonFoo3}
                />
            </div>

            <UseState
                callBack={onClickHandler}
                denomination={filteredCurrency}

            />
        </div>
    );
}

export default App;
