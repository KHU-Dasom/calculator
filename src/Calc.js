import React, { useState } from "react";

function Calc({ setHistories }) {
  const numList = (arr) =>
    arr.map((num) => (
      <button
        class={
          !isNaN(num)
            ? "button button--blue"
            : num === "="
            ? "button button--pink"
            : "button button--deepblue"
        }
        onClick={checkOp}
      >
        {num}
      </button>
    ));

  const [inputs, setInputs] = useState({
    left: "",
    right: "",
    operator: "",
    stage: "left",
  });

  const { left, right, operator, stage } = inputs;

  const checkOp = (e) => {
    const type = !isNaN(e.target.innerText)
      ? "number"
      : ["+", "-", "×", "÷"].includes(e.target.innerText)
      ? "operator"
      : e.target.innerText === "="
      ? "calculate"
      : e.target.innerText === "AC"
      ? "clear"
      : false;
    if (!type) return;
    return classify(type, e);
  };

  const classify = (type, event) => {
    switch (type) {
      case "number":
        setInputs({
          ...inputs,
          left: stage === "left" ? left + event.target.innerText : left,
          right: stage === "right" ? right + event.target.innerText : right,
        });
        break;
      case "operator":
        setInputs({
          ...inputs,
          left: stage === "right" ? calculate(left, right, operator) : left,
          right: "",
          stage: "right",
          operator: event.target.innerText,
        });
        break;
      case "calculate":
        setInputs({
          stage: "left",
          left: calculate(left, right, operator),
          operator: "",
          right: "",
        });
        break;
      case "clear":
        setInputs({
          stage: "left",
          left: "",
          right: "",
          operator: "",
        });
        break;
      default:
        return inputs;
    }
  };

  const calculate = (left, right, operator) => {
    let answer = 0;
    switch (operator) {
      case "+":
        answer = Number(right) + Number(left);
        break;
      case "-":
        answer = Number(left) - Number(right);
        break;
      case "×":
        answer = Number(left) * Number(right);
        break;
      case "÷":
        answer = Number(left) / Number(right);
        break;
      default:
        answer = "error";
    }

    const newHistory = (
      <tr>
        <td>{left + operator + right + " = " + answer}</td>
      </tr>
    );
    setHistories((array) => [...array, newHistory]);
    return answer;
  };

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">{left + operator + right}</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac" onClick={checkOp}>
            AC
          </div>
          <div class="calc__keyboard__number">
            <div class="calc__keyboard__number__line">{numList([1, 2, 3])}</div>
            <div class="calc__keyboard__number__line">{numList([4, 5, 6])}</div>
            <div class="calc__keyboard__number__line">{numList([7, 8, 9])}</div>
          </div>
          <div className="button button--blue--big" onClick={checkOp}>
            0
          </div>
        </div>
        <div className="calc__keyboard__operator">
          {numList(["+", "-", "×", "÷", "="])}
        </div>
      </div>
    </div>
  );
}

export default Calc;
