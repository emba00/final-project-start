import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    CSSProperties
} from "react";
import Pic from "../Pic";
import { DndProvider, DropTargetMonitor, useDrop, XYCoord } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "../BoardSquare";
import Dirt from "./images/dirt.png";
import update from "immutability-helper";
import { ItemTypes } from "../constants";
import type { ToolPos } from "./interfaces";
// import type { DropTargetMonitor, XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";
import Tool from "./Tool";
import { Button } from "react-bootstrap";
// // import { ItemTypes } from "../constants";DragItem,
// import Car from "./Car";
import RedCar from "./images/RedCar.png";
import City from "./images/City.png";
import Forest from "./images/Forest.png";
import Street from "./images/Street.png";
import Dump from "./images/Dump.png";
import Mountain from "./images/Mountain.png";
import Alley from "./images/Alley.png";
import Cave from "./images/Cave.png";
import Garage from "./images/Garage.png";
import RedCarLeftTire from "./images/RedCarLeftTire.png";
import RedCarRightTire from "./images/RedCarRightTire.png";
import RedCarBothTires from "./images/RedCarBothTires.png";
import BlueCar from "./images/BlueCar.png";
import BlueCarLeftTire from "./images/BlueCarLeftTire.png";
import BlueCarRightTire from "./images/BlueCarRightTire.png";
import BlueCarBothTires from "./images/BlueCarBothTires.png";
import GreenCar from "./images/GreenCar.png";
import GreenCarLeftTire from "./images/GreenCarLeftTire.png";
import GreenCarRightTire from "./images/GreenCarRightTire.png";
import GreenCarBothTires from "./images/GreenCarBothTires.png";

const cars = [
    [RedCar, RedCarLeftTire, RedCarRightTire, RedCarBothTires],
    [GreenCar, GreenCarLeftTire, GreenCarRightTire, GreenCarBothTires],
    [BlueCar, BlueCarLeftTire, BlueCarRightTire, BlueCarBothTires]
];
const styles: CSSProperties = {
    //width: "200px",
    //height: "300px",
    //border: "1px solid black",
    //position: "relative"
};
type CarChanges = Record<string, ToolPos>;
type ZoneProps = {
    x: number;
    y: number;
    toolery: CarChanges;
    currAah: string;
    saveCar: (toolname: string, changes: CarChanges) => void;
    //setAah: (aah: string) => void;
    //setTools: (tools: CarChanges) => void;
};

const Zone: React.FC<ZoneProps> = (props) => {
    const backgrounds = [
        City,
        Forest,
        Street,
        Dump,
        Mountain,
        Alley,
        Cave,
        Garage
    ];
    const { x, y, saveCar, toolery, currAah } = props;
    //const [square, setSquare] = useState<string[]>([]);
    const [aah, setAah] = useState<string>("");
    const [tools, setTools] = useState<CarChanges>({});
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [
            //ItemTypes.DROPS
            ItemTypes.ONEPOS,
            ItemTypes.CARS,
            ItemTypes.BACKS
        ],
        //move: () => moveTool(item.title, item.top, item.left),
        drop: (
            item: {
                type: string;
                id: string;
                top: number;
                left: number;
                title: string;
            },
            monitor: DropTargetMonitor
        ) => {
            if (item.type === ItemTypes.BACKS) {
                addBackground(item.title);
            } else if (item.type === ItemTypes.CARS) {
                //changeCar(something something)
            } else if (item.type === ItemTypes.ONEPOS) {
                //putOnCar(something something)
            }
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveTool(item.id, left, top);
            return undefined;
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    const [background, setBackground] = useState(NaN);
    const addBackground = (name: string) => {
        if (name === "City") {
            setBackground(0);
        } else if (name === "Forest") {
            setBackground(1);
        } else if (name === "Street") {
            setBackground(2);
        } else if (name === "Dump") {
            setBackground(3);
        } else if (name === "Mountain") {
            setBackground(4);
        } else if (name === "Alley") {
            setBackground(5);
        } else if (name === "Cave") {
            setBackground(6);
        } else if (name === "Garage") {
            setBackground(7);
        }
    };

    const [{ isOverr, canDropp }, dropp] = useDrop({
        accept: [
            ItemTypes.DROPS
            //ItemTypes.ONEPOS,
            //ItemTypes.CARS,
            //ItemTypes.BACKS
        ],
        //canDrop: () => canMovePic(x, y),
        //move: () => moveTool(item.title, item.top, item.left),
        drop: (
            item: {
                type: string;
                pic: string;
                top: number;
                left: number;
                title: string;
            },
            monitor: DropTargetMonitor
        ) => {
            //monitor.getClientOffset
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            const leftt = Math.round(delta.x);
            const topp = Math.round(delta.y);
            console.log(item.left, item.top);
            addPicToBoard(item.pic, topp, leftt, item.title);
        },
        collect: (monitor) => ({
            isOverr: !!monitor.isOver(),
            canDropp: !!monitor.canDrop()
        })
    });
    const addPicToBoard = (
        tool: string,
        top: number,
        left: number,
        title: string
    ) => {
        //const t = toolery.filter((toolname) => title === toolname);
        //const exist = Object.keys(tools).map((toolna) => title === toolname);
        // if(tools[aah])
        setAah(aah + "a");
        setTools({
            ...tools,
            [aah]: { top: top, left: left, title: title }
        });

        //setSquare((square) => [t[0], ...square]);
    };
    const saveChanges = () => {
        saveCar(aah, tools);
    };

    const moveTool = useCallback(
        (id: string, left: number, top: number) => {
            setTools(
                update(tools, {
                    [id]: {
                        $merge: { left, top }
                    }
                })
            );
        },
        [tools, setTools]
    );
    const addTool = (t: string) => {
        //tool: string,
        // top: number,
        // left: number,
        // title: string
        // const newtool = (
        //     <div ref={boxRef} className="box">
        //         <img src={Hammer} alt="dirt" />
        //     </div>
        // );
        setAah(aah + "a");
        //setTools({ ...tools, [aah]: { top: top, left: left, title: title } });
        setTools({ ...tools, [aah]: { top: 0, left: 0, title: t } });
        //setTools({});
    };
    const clear = () => {
        setTools({});
    };
    return (
        <>
            {" "}
            <div>
                <div
                    ref={dropp}
                    //className="toolncar"
                    style={{
                        backgroundImage: `url(${backgrounds[background]})`
                    }}
                >
                    <div
                        ref={drop}
                        className="toolncar"
                        style={{
                            backgroundImage: `url(${cars[0][0]}`,
                            width: 650,
                            height: 400
                        }}
                    >
                        {console.log(background)}
                        {Object.keys(tools).map((key: string) => (
                            <Tool
                                key={key}
                                id={key}
                                left={tools[key].left}
                                top={tools[key].top}
                                title={tools[key].title}
                            />
                        ))}
                        {/* <img src={RedCar} alt="car model" /> */}
                    </div>
                </div>
                <div>
                    <Button onClick={() => addTool("meep")}>Add Effect</Button>
                    <Button onClick={clear}>Clear Car</Button>
                </div>
            </div>
        </>
    );
};

export default Zone;
