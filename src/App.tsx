import React from 'react';
import './App.css';
import {Header} from './Header';
import {Body} from './Body';
import {CarsType, Footer} from './Footer';
import {UniversalButton} from "./components/button/UniversalButton";


const App = () => {
    const topCars: Array<CarsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    //Прописываем логику на кнопку выше
    const buttonFoo1 = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const buttonFoo2 = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const buttonFoo3 = () => {
        console.log('i am stupped button');
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
        </div>
    );
}

export default App;
