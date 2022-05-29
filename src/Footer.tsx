export type CarsType = {
    manufacturer: string
    model: string
}
type FooterCarsType = {
    cars: Array<CarsType>
}

export const Footer = (props: FooterCarsType) => {

    /* const carsModel = props.cars.map((elem, i) => {
         return <tr key={i}><td>{`manufacturer ${elem.manufacturer} model ${elem.model}`}</td></tr>
     });*/
    const carsModel1 = props.cars.map((manufacturerCar, i) => {
        return <div key={i}>{`manufacturer ${manufacturerCar.manufacturer}`}</div>
    });
    const carsModel2 = props.cars.map((ModelCar, i) => {
        return <div key={i}>{`model ${ModelCar.model}`}</div>
    });
    return (
        <table className={'manufacturer'}>
            <thead>
                <tr>
                    <td>
                        {carsModel1}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {carsModel2}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}