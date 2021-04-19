import React from "react";
import Button from "./Button";

function NumberPad({ number, set }) {
  function add_number(value) {
    console.log(1);
    console.log(set);
    console.log(number);
    set(number * 10 + value);
  }

  return (
    <div className="calc__keyboard__number">
      {[0, 1, 2].map((i) => (
        <div className="calc__keyboard__number__line">
          {[1, 2, 3].map((j) => (
            <Button
              Onclick={() => add_number(i * 3 + j)}
              shape="button--blue"
              value={i * 3 + j}
            ></Button>
          ))}
        </div>
      ))}
      <Button
        Onclick={() => add_number(0)}
        shape="button--blue--big"
        value={0}
      ></Button>
    </div>
  );
}

export default NumberPad;
