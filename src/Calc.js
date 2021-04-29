import React, { useState } from 'react';

const numbers = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
];

const signs = ['+', '-', 'x', '÷', '='];

function Calc({ setHistories }) {
  // 관리해야 할 것.
  // 현재입력, 이전까지 계산된 것, 부호기억
  const [numInput, setNumInput] = useState('0');
  const [sign, setSign] = useState('');
  const [amount, setAmount] = useState('0');
  // 총 결과를 보여줄지, 아니면 현재 입력하는 숫자를 보여줄지
  // 입력하는 숫자를 보여준다면 true, 총 결과면 false
  const [valid, setValid] = useState(true);

  const onClickNum = (e) => {
    const value = e.target.value;
    if (numInput === '0') {
      setNumInput(value);
      setValid(true);
    } else {
      setNumInput((prevValue) => prevValue + value);
      setValid(true);
    }
  };

  const onClickSign = (e) => {
    const inputSign = e.target.value;

    if (inputSign === 'ac') {
      setAmount('0');
      setNumInput('0');
      setSign('');
      setValid(false);
    } else {
      calculation(inputSign);
      setValid(false);
    }
  };

  function calculation(inputSign) {
    var result = null;
    switch (sign) {
      case '':
        setAmount(numInput);
        setNumInput('0');
        if (inputSign === '=') setSign('');
        else setSign(inputSign);
        break;

      case '+':
        result = String(Number(amount) + Number(numInput));
        if (numInput !== '0')
          setHistories((prevHistroy) =>
            prevHistroy.concat(`${amount} ${sign} ${numInput} = ${result}`),
          );

        if (inputSign === '=') {
          setSign('+');
        } else {
          setSign(inputSign);
        }

        setAmount(result);
        setNumInput('0');
        break;

      case '-':
        result = String(Number(amount) - Number(numInput));
        if (numInput !== '0')
          setHistories((prevHistroy) =>
            prevHistroy.concat(`${amount} ${sign} ${numInput} = ${result}`),
          );

        if (inputSign === '=') {
          setSign('-');
        } else {
          setSign(inputSign);
        }

        setAmount(result);
        setNumInput('0');
        break;

      case 'x':
        result = String(Number(amount) * Number(numInput));

        if (numInput !== '1' && numInput !== '0')
          setHistories((prevHistroy) =>
            prevHistroy.concat(`${amount} ${sign} ${numInput} = ${result}`),
          );
        if (inputSign === '=') {
          setSign('x');
          setNumInput('1');
        } else {
          setSign(inputSign);
          setNumInput('0');
        }
        setAmount(result);
        break;

      case '÷':
        result = String(Number(amount) / Number(numInput));
        if (numInput === '0') {
          alert('÷0 은 유효하지 않은 연산입니다.');
          setNumInput(amount);
          setSign('');
          break;
        }
        if (numInput !== '1' && numInput !== '0')
          setHistories((prevHistroy) =>
            prevHistroy.concat(`${amount} ${sign} ${numInput} = ${result}`),
          );
        if (inputSign === '=') {
          setSign('÷');
          setNumInput('1');
        } else {
          setSign(inputSign);
          setNumInput('0');
        }
        setAmount(result);
        break;

      default:
        break;
    }
  }

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">{valid ? numInput : amount}</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <button
            className="button calc__keyboard__ac"
            value="ac"
            onClick={onClickSign}
          >
            AC
          </button>
          <div className="calc__keyboard__number">
            {numbers.map((line, idx) => (
              <div key={`line-${idx}`} className="calc__keyboard__number__line">
                {line.map((num, idx) => (
                  <button
                    className="button button--blue"
                    value={num}
                    key={`number-${idx}`}
                    onClick={onClickNum}
                  >
                    {num}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <button
            className="button button--blue--big"
            value={0}
            onClick={onClickNum}
          >
            0
          </button>
        </div>
        <div className="calc__keyboard__operator">
          {signs.map((sign, idx) => (
            <button
              className="button button--deepblue"
              value={sign}
              key={`sign-${idx}`}
              onClick={onClickSign}
            >
              {sign}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calc;
