import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

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

  const onClickNum = (inputNum) => {
    const value = inputNum;
    if (numInput === '0') {
      setNumInput(value);
      setValid(true);
    } else {
      setNumInput((prevValue) => prevValue + value);
      setValid(true);
    }
  };

  const onClickSign = (inputSign) => {
    const value = inputSign;

    if (value === 'ac') {
      setAmount('0');
      setNumInput('0');
      setSign('');
      setValid(false);
    } else {
      calculation(value);
      setValid(false);
    }
  };

  const createThreeButtonAlert = () =>
    Alert.alert('divide 0 error', '0으로 숫자를 나눌 수 없습니다', [
      { text: 'OK' },
    ]);

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
          console.log('악');
          createThreeButtonAlert();
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
    <SafeAreaView style={styles.warp}>
      <View style={styles.calc}>
        <Text style={styles.calcTitle}>Calculator</Text>
        <Text style={styles.calcScore}>{valid ? numInput : amount}</Text>
        <View style={styles.calcKeyboard}>
          <View style={styles.calcKeyboardMain}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.calcKeyboardAc}
              onPress={() => onClickSign('ac')}
            >
              <Text style={styles.text}>AC</Text>
            </TouchableOpacity>
            <View>
              {numbers.map((line, idx) => (
                <View key={`line-${idx}`} style={styles.calcKeyboardNumberLine}>
                  {line.map((num, idx) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.buttonBlue}
                      key={`num-${idx}`}
                      onPress={() => onClickNum(String(num))}
                    >
                      <Text style={styles.text}>{num}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonBlueBig}
              onPress={() => onClickNum('0')}
            >
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.calcKeyboardOperator}>
            {signs.map((sign, idx) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.buttonDeepblue}
                key={`num-${idx}`}
                onPress={() => onClickSign(sign)}
              >
                <Text style={styles.text}>{sign}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Calc;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  calc: {
    display: 'flex',
    flexDirection: 'column',
  },
  calcTitle: {
    fontSize: 30,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f82564',
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    color: '#ffffff',
  },
  calcScore: {
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 80,
    width: 400,
    paddingRight: 38,
    paddingLeft: 38,
    borderLeftWidth: 1,
    borderLeftColor: '#F5F5F5',
    borderRightWidth: 1,
    borderRightColor: '#F5F5F5',
  },

  calcKeyboard: {
    fontSize: 30,
    display: 'flex',
    flexDirection: 'row',
  },

  calcKeyboardMain: {
    fontSize: 30,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  calcKeyboardOperator: {
    fontSize: 30,
    display: 'flex',
    flexDirection: 'column',
  },

  calcKeyboardAc: {
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#3c43a7',
    borderBottomWidth: 1,
    borderBottomColor: '#22299b',
  },

  calcKeyboardNumberLine: {
    display: 'flex',
    flexDirection: 'row',
  },

  buttonBlue: {
    backgroundColor: '#3c43a7',
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonBlueBig: {
    backgroundColor: '#3c43a7',
    width: 300,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDeepblue: {
    backgroundColor: '#22299b',
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 24,
    color: 'white',
  },
});
