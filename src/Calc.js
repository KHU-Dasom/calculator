import React from "react";

function Calc({ setHistories }) {
  const numList = (arr) =>
    arr.map((num) => (
      <div
        class={
          !isNaN(num)
            ? "button button--blue"
            : num === "="
            ? "button button--pink"
            : "button button--deepblue"
        }
      >
        {num}
      </div>
    ));

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">0</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac">AC</div>
          <div class="calc__keyboard__number">
            <div class="calc__keyboard__number__line" number="1">
              {numList([1, 2, 3])}
            </div>
            <div class="calc__keyboard__number__line">{numList([4, 5, 6])}</div>
            <div class="calc__keyboard__number__line">{numList([7, 8, 9])}</div>
          </div>
          <div className="button button--blue--big">0</div>
        </div>
        <div className="calc__keyboard__operator">
          {numList(["+", "-", "x", "÷", "="])}
        </div>
      </div>
    </div>
  );
}

export default Calc;
