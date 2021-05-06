import React from "react";
import "./calculate.scss";
import Calc from "./Calc";
import HistoryContainer from "./Container/HistoryContainer";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Calc />
        <HistoryContainer />
      </div>
    </div>
  );
}

export default App;
