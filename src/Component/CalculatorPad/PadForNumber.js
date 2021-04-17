import React from "react";
import Calcbutton from "./Calcbutton";

const NumberLine = ({ idx, numberkey }) => {
  idx = idx * 3 + 1;
  const buttonIdx = [idx, idx + 1, idx + 2];
  const numberLine = buttonIdx.map((value) => (
    <Calcbutton onClick={numberkey} key={value} color="blue" value={value} />
  ));
  return <div className="calc__keyboard__number__line">{numberLine}</div>;
};

function PadForNumber({ numberkey }) {
  const numberLineidx = Array(3).fill(null);
  const numberPad = numberLineidx.map((value, idx) => (
    <NumberLine numberkey={numberkey} key={`Lineidx-${idx}`} idx={idx} />
  ));
  numberPad.reverse();

  return (
    <div className="calc__keyboard__number">
      {numberPad}
      <Calcbutton onClick={numberkey} color="blue--big" value="0" />
    </div>
  );
}

export default PadForNumber;
