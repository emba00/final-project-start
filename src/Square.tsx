import React from "react";

type SquareProps = {
    black: boolean;
};

const Square: React.FC<SquareProps> = (props) => {
    const fill = props.black ? "black" : "white";
    const stroke = props.black ? "white" : "black";

    return (
        <div
            style={{
                backgroundColor: fill,
                color: stroke,
                width: "100%",
                height: "50%"
            }}
        >
            {props.children}
            {props.black ? "black" : "white"}
        </div>
    );
};

export default Square;
