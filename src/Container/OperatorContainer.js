import React from "react";
import { connect } from "react-redux";
import OperatorPad from "../Components/OperatorPad";
import { setOperator } from "../store/modules/cacluate";

function OperatorPadContainer(props) {
  const handleSetOperator = (operator) => {
    const setOperator = props.setOperator;
    setOperator(operator);
  };
  return <OperatorPad onSetOperator={handleSetOperator} />;
}

const mapStateToProps = ({ calculate }) => ({
  first: calculate.first,
  second: calculate.second,
  operator: calculate.operator,
  history: calculate.history,
});

const mapDispatchToProps = {
  setOperator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperatorPadContainer);
