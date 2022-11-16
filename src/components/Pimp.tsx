// import ReactDOM from "react-dom";
// import Board from "../Board";
// import { observe } from "../game";
// //import reportWebVitals from "./reportWebVitals";
// //import App from "./App";

// observe((picPosition: [number, number]) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <div
//                 style={{
//                     width: "500px",
//                     height: "500px",
//                     border: "1px solid gray"
//                 }}
//             >
//                 {
//                     //const tools=["Wipe Car","Shine Car","Fill Tires","Repair Windows","etc"];
//                 }
//                 <Board
//                     picPosition={picPosition}
// pics={[
//     "Wipe Car",
//     "Shine Car",
//     "Fill Tires",
//     "Repair Windows",
//     "etc"
// ]}
//                 />
//             </div>
//         </React.StrictMode>,
//         document.getElementById("root")
//     );
// });
import React from "react";
import Towel from "./images/towel.png";
import Shine from "./images/shine.png";
import Pump from "./images/pump.png";
import GlassRepair from "./images/glass repair.png";

const Pimp = () => {
    return (
        <div className="toolncar">
            <h1>Pimp Mode</h1>
            <p>
                Pimp Mode Options:
                <div>
                    <img src={Towel} alt="towel" />
                    Wipe Car
                </div>
                <div>
                    <img src={Shine} alt="shine" />
                    Shine Car
                </div>
                <div>
                    <img src={Pump} alt="pump" />
                    Fill Tires
                </div>
                <div>
                    <img src={GlassRepair} alt="glass repair" />
                    Repair Windows
                </div>
                <div>etc</div>
            </p>
        </div>
    );
};

export default Pimp;
