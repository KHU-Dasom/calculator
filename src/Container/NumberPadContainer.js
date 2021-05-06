import React from "react";
import { connect } from "react-redux";
import NumberPad from "../Components/NumberPad";
import { setNumber } from "../store/modules/cacluate";

function NumberPadContainer(props) {
  const handleSetNumber = (number) => {
    const setNumber = props.setNumber;
    setNumber(number);
  };
  return <NumberPad onSetNumber={handleSetNumber} />;
}

const mapStateToProps = ({ calculate }) => ({
  first: calculate.first,
  second: calculate.second,
  operator: calculate.operator,
  history: calculate.history,
});

const mapDispatchToProps = {
  setNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberPadContainer);
