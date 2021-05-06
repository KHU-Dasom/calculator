import React from "react";
import { connect } from "react-redux";
import Score from "../Components/Score";

function ScoreContainer(props) {
  return (
    <Score
      first={props.first}
      second={props.second}
      operator={props.operator}
    ></Score>
  );
}

const mapStateToProps = ({ calculate }) => ({
  first: calculate.first,
  second: calculate.second,
  operator: calculate.operator,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);
