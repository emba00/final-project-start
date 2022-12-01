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
//bruh
import React from "react";
import Towel from "./images/towel.png";
import Shine from "./images/shine.png";
import Pump from "./images/pump.png";
import GlassRepair from "./images/glassrepair.png";

const pimp = [Towel, Shine, Pump, GlassRepair];
const str = ["Wipe Car", "Shine Car", "Fill Tires", "Repair Glass"];

const Pimp = () => {
    return (
        <div className="toolncar">
            <h1>Pimp Mode</h1>
            <p>
                Pimp Mode Options:
                {pimp.map(
                    // eslint-disable-next-line no-extra-parens
                    (t: string): JSX.Element => (
                        <div key={t.toString()}>
                            <img src={t} alt={t.toString()} />
                            {str[pimp.indexOf(t)]}
                        </div>
                    )
                )}
            </p>
        </div>
    );
};

export default Pimp;
