import React from 'react';
import './App.css';
import { Header } from './Header';
import { Body } from './Body';
import {CarsType, Footer} from './Footer';


const App = () => {
    const topCars: Array<CarsType> = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <div className="App">
            <Header title={'NEW HEADER'}/>
            <Body title={'NEW BODY'}/>
            <Footer cars={topCars} />
        </div>
    );
}

export default App;
