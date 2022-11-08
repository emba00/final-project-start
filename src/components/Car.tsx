import RedCar from "./red car.png";
import BlueCar from "./blue car.png";
import GreenCar from "./green car.png";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Car(): JSX.Element {
    const [colorNum, setColorNum] = useState(0);
    return (
        <div>
            {colorNum == 0 && <img src={RedCar} alt="red car" />}
            {colorNum == 1 && <img src={BlueCar} alt="blue car" />}
            {colorNum == 2 && <img src={GreenCar} alt="green car" />}
            <Button onClick={() => setColorNum((colorNum + 1) % 3)}>
                Change Color (Red/Blue/Green)
            </Button>
        </div>
    );
}

export default Car;
