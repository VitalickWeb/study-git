import React from "react";

export type TopCarsType = {
    manufacturer: string
    model: string
}

type StudentPropsType = {
    cars: Array<TopCarsType>
}

export const TopCars = (props: StudentPropsType) => {
    const renderCars = props.cars.map((car, idx) => {

        return (
            <tr key={idx}>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>
        )
    })
    return (
        <table className={'manufacturer'}>
            <thead>
                <tr>
                    <td>manufacturer</td>
                    <td>model</td>
                </tr>
            </thead>
            <tbody>
                {renderCars}
            </tbody>
        </table>
    );
}