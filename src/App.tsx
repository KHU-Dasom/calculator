import { useState } from "react";
import "./calculate.scss";
import Calc from "./Component/Calc";
import History from "./History";
import * as React from "react";

const App: React.FC = () => {
    const [histories, setHistories] = useState([] as string[]);
    return (
        <div className="App">
            <div className="Container">
                <Calc setHistories={setHistories} histories={histories}/>
                <History histories={histories}/>
            </div>
        </div>
    );
}

export default App;
