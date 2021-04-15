import React from "react";

function Calc({ setHistories }) {
  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">0</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac">AC</div>
          <PadForNumber />
        </div>
        <div className="calc__keyboard__operator">
          <div className="button button--deepblue">+</div>
          <div className="button button--deepblue">-</div>
          <div className="button button--deepblue">×</div>
          <div className="button button--deepblue">÷</div>
          <div className="button button--pink">=</div>
        </div>
      </div>
    </div>
  );
}

function Calcbutton({ value, color }) {
  return <div className={`button button--${color}`}>{value}</div>;
}

function PadForNumber() {
  const NumberLine = ({ idx }) => {
    idx = idx * 3 + 1;
    const buttonIdx = [idx, idx + 1, idx + 2];
    const numberLine = buttonIdx.map((value) => (
      <Calcbutton color="blue" value={value} />
    ));
    return <div className="calc__keyboard__number__line">{numberLine}</div>;
  };

  const NumberPad = () => {
    const numberLineidx = Array(3).fill(null);
    const numberPad = numberLineidx.map((value, idx) => (
      <NumberLine idx={idx} />
    ));
    numberPad.reverse();
    return (
      <div class="calc__keyboard__number">
        {numberPad}
        <Calcbutton color="blue--big" value="0" />
      </div>
    );
  };
  return <NumberPad />;
}

export default Calc;
