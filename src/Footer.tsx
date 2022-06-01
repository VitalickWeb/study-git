export type CarsType = {
    manufacturer: string
    model: string
}
type FooterCarsType = {
    cars: Array<CarsType>
}

export const Footer = (props: FooterCarsType) => {
    const carsRender = props.cars.map((manufacturerCar, i) => {
        return (
            <tr key={i}>
                <td>{manufacturerCar.manufacturer}</td>
                <td>{manufacturerCar.model}</td>
            </tr>
        )
    });

    return (
        <table className={'manufacturer'}>
            <thead>
            <tr>
                <td>manufacturer</td>
                <td>model</td>
            </tr>
            </thead>
            <tbody>
                {carsRender}
            </tbody>
        </table>
    );
}