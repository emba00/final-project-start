import { stringify } from "querystring";
import React, { Fragment } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

type PicProps = {
    pic: string;
};

const Pic: React.FC<PicProps> = (props) => {
    const { pic } = props;
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC, pic: pic },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                {/*♘*/}
                <header>{pic}</header>
                <img
                    src={require("./bosun_tally.jpg")}
                    width="80"
                    height="80"
                />
            </div>
        </Fragment>
    );
};

export default Pic;
